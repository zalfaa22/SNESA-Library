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
            category: request.body.category,
            pict: request.file.filename
        };
        if(newBook.code === ""|| newBook.title === ""|| newBook.author === ""|| newBook.category === ""|| newBook.pict === ""){
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
            return response.json({ message:error })
        }
        let id = request.params.id;
        let book ={
            code: request.body.code,
            title: request.body.title,
            author: request.body.author,
            category: request.body.category,
        };
        if (request.file){
            const selectedBook = await modelBook.findOne({
                where: { id: id }
            })
            const oldCoverBook = selectedBook.pict
            const pathCover = path.join(__dirname, `../foto`, oldCoverBook)
            
            if (fs.existsSync(pathCover)) {
                fs.unlink(pathCover, error =>
                    console.log(error))
                }
                book.pict = request.file.filename
            }
        
        modelBook.update(book, {where: {id:id}}).then((result)=> {
            return response.json({
                success: true,
                message: `Data book has been updated`,
            })
        }).catch((error) => {
            return response.json({
                success: false,
                message: error.message,
              });  
        })
    })
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
