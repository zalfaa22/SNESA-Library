const { request, response } = require("express")
const modelBorrow = require("../models/index").borrow 

exports.getAll = async (request, response) => {
    let borrows = await modelBorrow.findAll({
        order : [['createdAt', 'DESC']],
    })
    
    if (borrows.length === 0) {
        return response.json({
          success: true,
          data: [],
          message: `Data not found`,
        });
      }
    return response.json({
    success: true,
    data: borrows,
    message: `this is all the data`
})
}

exports.findBorrow = async (request, response) => {
    let code = request.body.code
    let borrows = await modelBorrow.findAll({
        where: {
            code: code ,
            
        }
    })
    return response.json({
        success: true,
        data: borrows,
        message: `Borrow have been loaded`
    })
}

exports.addBorrow = async(request, response)=>{
    let date_of_return = new Date(Date.now());
    date_of_return.setDate(date_of_return.getDate() + 7);
    let newBorrow = {
        code: request.body.code,
        student_name: request.body.student_name,
        class: request.body.class,
        absen: request.body.absen,
        date_of_borrow: Date.now(),
        date_of_return: date_of_return,
        status: "dipinjam"
    }
    try{const result = await modelBorrow.create(newBorrow);
    return response.json({
        success: true,
        code: result.code,
        message: `Borrow has been added`
    });
}catch(error){
    return response.json({
        success: false,
        message: error.message,
    })
}
}

exports.updateBorrow = async (request, response) => {
    try {
        let id = request.params.id;
 
        // Ambil data pinjaman berdasarkan ID
        let borrow = await modelBorrow.findByPk(id);
 
        if (!borrow) {
            return response.json({
                success: false,
                message: "Borrow not found",
            });
        }
 
        // Set status pinjaman
        borrow.status = request.body.status;
 
        // Jika status berubah menjadi "dikembalikan"
        if (request.body.status === "dikembalikan") {
            borrow.return_date = new Date();
 
            // Hitung denda jika melebihi tanggal kembali yang diharapkan
            const expectedReturnDate = new Date(borrow.date_of_return);
            if (borrow.return_date > expectedReturnDate) {
                const diffTime = borrow.return_date.getTime() - expectedReturnDate.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const penalty = diffDays * 5000;
 
                // Set nilai denda
                borrow.penalty = penalty;
            } else {
                // Jika tanggal pengembalian tepat waktu atau lebih awal, maka denda = 0
                borrow.penalty = 0;
            }
        }
 
        // Simpan perubahan
        await borrow.save();
 
        return response.json({
            success: true,
            message: "Borrow updated successfully",
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message,
        });
    }
 };

 exports.getBorrowById = async (request, response) => {
    try {
        const id = request.params.id;
        const book = await modelBook.findByPk(id);
        
        if (!book) {
            return response.status(404).json({
                success: false,
                message: `Book not found with ID ${id}`
            });
        }
        
        return response.json({
            success: true,
            data: book,
            message: `Book details retrieved successfully`
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
};
