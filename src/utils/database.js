import mongoose from 'mongoose'

const URI = 'mongodb+srv://cadimob:6cgKHQ@cluster0.pf8dqvf.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if (!global.mongoose){
    mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection