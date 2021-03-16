const mongoose = require("mongoose");

const  dbConnection = async ()=>{

try {
   await mongoose.connect(process.env.MONGODB_CNN , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
console.log('Base de datos en Linea')
} catch (error) {
 throw new Error('no se pudo conectar a la BD')   
}

}

module.exports = dbConnection;