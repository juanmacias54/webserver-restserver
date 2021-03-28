const {Router} = require("express");
const{check} = require("express-validator");
const { cargarArchivo, actualizarImagen, mostrarImagen, actualizarImagenClaudinary } = require("../controllers/uploads");
const { validarCampos, validarArchivo } = require("../middlewares");
const { coleccionesPermitidas } = require("../helpers");

const router = Router();



router.post("/",validarArchivo, cargarArchivo);


router.put(
  "/:coleccion/:id",
  [
    validarArchivo,
    check("id", "debe ser un id mongo valido").isMongoId(),
    check("coleccion").custom((c) =>
      coleccionesPermitidas(c, ["usuarios", "productos"])
    ),
    validarCampos,
  ],
  actualizarImagenClaudinary
  //actualizarImagen
);

router.get(
  "/:coleccion/:id",
  [
    check("id", "debe ser un id mongo valido").isMongoId(),
    check("coleccion").custom((c) =>
      coleccionesPermitidas(c, ["usuarios", "productos"])
    ),
    validarCampos,
  ],
  mostrarImagen
);


module.exports = router;