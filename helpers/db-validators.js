const Role = require("../models/role");
const Usuario = require("../models/usuario");

// Valida Rol
const esRolValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol  '${rol}' no existe`);
  }
};

//Valida Correo
const esEmailValido = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  
  if (existeEmail) {
    throw new Error(`El email '${correo}' ya fue registrado!!!!`); 
  }
};

//Valida Usuario
const esIdValido = async (id) => {
  const existeId = await Usuario.findById(id);
  if (!existeId) {
    throw new Error(`El Usuario '${id}' no existe!!!!`, existeId);
  }
};
//Valida Usuario Delete
const esIdValidoDel = async (id) => {
  const existeId = await Usuario.findById(id,{estado:false});
  if (existeId ) {
    throw new Error(`El Usuario '${id}' ya estaba inactivo!!!!`,);
  }
};

module.exports = {
  esRolValido,
  esEmailValido,
  esIdValido,
  esIdValidoDel,
};