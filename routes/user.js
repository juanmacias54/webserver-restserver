const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  esRolValido,
  esEmailValido,
  esIdValido,
  esIdValidoDel,
} = require("../helpers/db-validators");

const validar_body = require("../middlewware/middleware-validator");
const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
} = require("../controllers/user");

esRolValido
validar_body
//Metodo Get
router.get("/", usuarioGet);
//Metodo Post
router.post(
  "/",
  [
    check("nombre", "nombre es Obligatorio").notEmpty(),
    check("correo", "El correo no es una direccion valida!!!!").isEmail(),
    check("correo").custom(esEmailValido),
    check("password", "PASSWORD no es Correcto").isLength(6),
    check("rol").custom(esRolValido),
    validar_body
  ],
  usuarioPost
);
//Metodo Put
router.put(
  "/:id/",
  [
    check("id", "no es un Id mongo valido").isMongoId(),
    check("id").custom(esIdValido),
    check("rol").custom(esRolValido),
    validar_body,
  ],
  usuarioPut
);

//Metdo Delete
router.delete(
  "/:id",
  [
    check("id", "no es un Id mongo valido").isMongoId(),
    check("id").custom(esIdValidoDel),
    validar_body,
  ],
  usuarioDelete
);



//Metdo Patch
router.patch("/", usuarioPatch);

module.exports = router;
