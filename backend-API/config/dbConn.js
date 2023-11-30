const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
  } catch (err) {
    console.error('error #%d: %s', err.code, err.message)
  }
}

module.exports = connectDB
