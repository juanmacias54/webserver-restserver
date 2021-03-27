const { request, response } = require("express");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const cargarArchivo = (req = request, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json({ msg: "No se selecionaron archivos a cargar!!!" });
    return;
  }

  const { archivo } = req.files;
  const nombreCortado = archivo.name.split(".");
  const extencion = nombreCortado[nombreCortado.length - 1];
  extencionesValidas = ["gif", "jpg", "img", "bmp", "png", "tiff"];
  nombreArchivo = uuidv4()+`.${extencion}`;
  
  if (!extencionesValidas.includes(extencion)) {
    res
      .status(400)
      .json({
        msg: `tipo de archivo '.${extencion}' no valido, solo tipo '${extencionesValidas}'`,
      });
    return;
  }
  //const path =  + `/../uploads/${archivo.name}`;
  const uploadPath = path.join(__dirname, "../uploads/", nombreArchivo);

  archivo.mv(uploadPath, function (err) {
    if (err) {
      res.status(500).json({ err });
      return;
    }

    res.status(200).json({
      msg: "archivo cargado  " + nombreArchivo,
    });
  });
};

module.exports = {
  cargarArchivo,
};
