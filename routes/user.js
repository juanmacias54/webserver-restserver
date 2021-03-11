const {Router} = require('express');
const router = Router();
const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch
} = require('../controllers/user');

 router.get("/", usuarioGet);
 router.post("/", usuarioPost);
 router.put("/", usuarioPut);
 router.delete("/:id/:name",usuarioDelete);
 router.patch("/", usuarioPatch); 

  module.exports = router;

        