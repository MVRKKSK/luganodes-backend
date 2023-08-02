const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
const connectdb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
        console.log(`${conn.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectdb