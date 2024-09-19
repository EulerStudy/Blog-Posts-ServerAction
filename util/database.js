const { MongoClient } = require("mongodb")

const url = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.mnu2o.mongodb.net/`
const options = { /*useNewUrlParser: true*/ }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
// console.log(url)
export { connectDB }