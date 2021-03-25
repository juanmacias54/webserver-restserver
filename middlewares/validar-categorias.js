const { response, request } = require("express");
const { Categoria } = require("../models");

const validaCategoria = (req = request, res = response, next) => {
  
  // if (!req.categoria) {
  //   return res.status(500).json({
  //     msg: "Es obligatorio colocar una Categoria",
  //   });
  // }
 

  //const categoriaBD = Categoria.findById(id);
  
  // if (!categoriaBD) {
  //   return res.status(401).json({
  //     msg: `Categoria no existe`,
  //   });
  // }
  next();
};

module.exports = {
  
  validaCategoria,
};
