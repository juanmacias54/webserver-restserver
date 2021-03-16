const { response, request } = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario");
const { find, where } = require("../models/usuario");

const usuarioGet = async(req, res) => {
  const { limite=5, desde=0 } = req.query;

    const [total,usuarios ]= await Promise.all([
       Usuario.countDocuments({ estado: true }),
       Usuario.find({ estado: true }),
    ]);
  
  res.json({
    total,
    usuarios
  });
};

const usuarioPost = async (req = request, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  usuario = new Usuario({ nombre, correo, password, rol });

  //Encripta Password
  const saltRounds = 10;
  usuario.password = bcrypt.hashSync(password, saltRounds);

  //Guarda Registro en la BD
  await usuario.save();
  res
    .status(200)
    .json({ sentence: "Hola Server  Router/Controller Post:Api", usuario });
};
const usuarioPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...rest } = req.body;
 
  //Encripta Password
  if(password){
  const saltRounds = 10;
  rest.password = bcrypt.hashSync(password, saltRounds);
  }
  const usuario= await Usuario.findByIdAndUpdate(id,rest);

  res.status(200).json({
    sentence: "Hola Server  Router/Controller Put:Api",usuario

  });
};
const usuarioDelete = async(req, res) => {
  const { id } = req.params;

  //Borra fisicamente no se usa 
  //const usuario = await Usuario.findByIdAndDelete(id);

 const usuario = await Usuario.findByIdAndUpdate(id,{estado: false})

  res.status(200).json({
    sentence :`Usuario Id Borrado:${id}`,
    usuario,
  });
};
const usuarioPatch = (req, res) => {
  res
    .status(200)
    .json({
    sentence: "Hola Server  Router/Controller Put:Api",usuario

  })
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
};
