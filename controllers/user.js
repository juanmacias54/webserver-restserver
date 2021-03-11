const { response, request } = require("express");

const usuarioGet = (req, res) => {
  const { name,edad,color } = req.query;
  res.json({ sentence: "Hola Server Class Router/Controll Get:Api" ,name,edad,color});
};
const usuarioPost = (req = request, res = response) => {
  const body = req.body;
  res
    .status(200)
    .json({ sentence: "Hola Server  Router/Controller Post:Api", body });
};
const usuarioPut = (req, res) => {
  res
    .status(200)
    .json({ sentence: "Hola Server  Router/Controller Put:Api" });
};
const usuarioDelete = (req, res) => {
    const { id, name } = req.params;
  res
  .status(200)
  .json({ sentence: "Hola Server  Router/Controller Delete" , id, name});
};
const usuarioPatch = (req, res) => {
  res
    .status(200)
    .json({ sentence: "Hola Server  Router/Controller Patch:Api" });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
};
