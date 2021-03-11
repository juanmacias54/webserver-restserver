const express = require("express");
const cors = require("cors");
const { router } = require("../routes/user");
const { json } = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/user';

    this.middleware();
    this.routes();
    this.listen();
  }
  routes() {
   
    this.app.use(this.userPath, require("../routes/user"));
   
  }
  listen() {
    this.app.listen(this.port);
    console.log("Escuchando por el puerto", this.port);
  }

  middleware() {

    //Lectura y Parseo .Json
    this.app.use(express.json());

    //Directorio Publico
    this.app.use(express.static("public"));

    // CORS
    this.app.use(cors());
  }
}
module.exports = Server;
