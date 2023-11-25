const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log("Conectando com banco de dados")

    mongoose.connect("mongodb+srv://cadimobiII:1eeEX456785@cluster0.i33i3hs.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Atlas Conectado")) 
    .catch((error) => console.log(error))
}

module.exports = connectDatabase