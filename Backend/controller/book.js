const { request, response } = require("express")
const modelBook = require("../models/index").book 
const path = require(`path`)
const fs = require(`fs`)
const upload = require(`./foto`).single(`pict`)

exports.getAll = async (request, response) => {
    let books = await modelBook.findAll({
        order : [['createdAt', 'DESC']],
    })
    
    if (books.length === 0) {
        return response.json({
          success: true,
          data: [],
          message: `Data not found`,
        });
      }
    return response.json({
    success: true,
    data: books,
    message: `this is all the data`
})
}

exports.getBookById = async (request, response) => {
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


exports.findBook = async (request, response) => {
    let code = request.body.code
    let books = await modelBook.findAll({
        where: {
            code: code ,
            
        }
    })
    return response.json({
        success: true,
        data: books,
        message: `All Books have been loaded`
    })
}

exports.addBook = async (request, response) => {
    upload(request, response, async error => {
        if(error){
            return response.json({ message: error })
        }
        if(!request.file){
            return response.json({ message: `nothing to upload`})
        }
        let newBook = {
            code: request.body.code,
            title: request.body.title,
            author: request.body.author,
            penerbit: request.body.penerbit,
            tahun_terbit: request.body.tahun_terbit,
            category: request.body.category,
            pict: request.file.filename
        };
        if(newBook.code === ""|| newBook.title === ""|| newBook.author === ""|| newBook.penerbit === ""|| newBook.tahun_terbit === ""|| newBook.category === ""|| newBook.pict === ""){
            return response.json({
                success: false,
                message: "All data must be filled in!"
            });
        }
        try{
            const existingCode = await modelBook.findOne({
                where: {code: newBook.code},
            });
            if(existingCode){
                return response.json({
                    success: false,
                    message: "Code is already in use",
                })
            }
            const result = await modelBook.create(newBook);
            return response.json({
                success: true,
                code: result.code,
                title: result.title,
                message: `Book has been added`
            });
        }catch(error){
            return response.json({
                success: false,
                message: error.message,
            })
        }
    })
}

exports.updateBook = async (request, response) => {
    upload(request, response, async error => {
        if(error){
            return response.json({ success: false, message: error });
        }

        try {
            const id = request.params.id;
            const existingBook = await modelBook.findByPk(id);

            if (!existingBook) {
                return response.status(404).json({ success: false, message: `Book not found with ID ${id}` });
            }

            let updatedBook = {
                code: request.body.code || existingBook.code,
                title: request.body.title || existingBook.title,
                author: request.body.author || existingBook.author,
                penerbit: request.body.penerbit || existingBook.penerbit,
                tahun_terbit: request.body.tahun_terbit || existingBook.tahun_terbit,
                category: request.body.category || existingBook.category,
            };

            if (request.file) {
                // Handle file upload
                const oldCoverBook = existingBook.pict;
                const pathCover = path.join(__dirname, `../foto`, oldCoverBook);

                if (fs.existsSync(pathCover)) {
                    fs.unlinkSync(pathCover);
                }

                updatedBook.pict = request.file.filename;
            }

            await existingBook.update(updatedBook);

            return response.json({ success: true, message: `Book data has been updated` });
        } catch (error) {
            return response.status(500).json({ success: false, message: error.message });
        }
    });
}


exports.deleteBook = async(request, response)=>{
    const id = request.params.id
    const book = await modelBook.findOne({ where: { id: id } })
    const oldCoverBook = book.pict
    const pathCover = path.join(__dirname, `../foto`, oldCoverBook)
    
    if (fs.existsSync(pathCover)) {
        fs.unlink(pathCover, error => console.log(error))
    }
    
    modelBook.destroy({ where: { id: id } })
    .then(result => {
        return response.json({
            success: true,
            message: `Data book has been deleted`
        })
    })
    .catch(error => {
        return response.json({
            success: false,
            message: error.message
        })
    })
}

exports.getBookById = async (request, response) => {
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