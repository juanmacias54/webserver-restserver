const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");



const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.authPath = "/api/auth";
    this.buscarPath = "/api/buscar";
    this.categoriaPath = "/api/categoria";
    this.productoPath = "/api/producto";
    this.uploadsPath = "/api/uploads";
    this.usuariosPath = "/api/usuarios";

    // Conectar a base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));

    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath:true,
      })
    );
   
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auths"));
    this.app.use(this.buscarPath, require("../routes/buscar"));
    this.app.use(this.categoriaPath, require("../routes/categorias"));
    this.app.use(this.productoPath, require("../routes/productos"));
    this.app.use(this.uploadsPath, require("../routes/uploads"));
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
