const{request,response} = require("express");

const validarArchivo = (req, res = response,next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res
      .status(400)
      .json({ msg: "No se selecionaron archivos a cargar -validarArchivo" });
    return;
  }

  next();
};

module.exports = {
    validarArchivo,
}