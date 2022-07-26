const { Router } = require("express");
const { isAdmin } = require("../controllers/user.controller.js");
const { Categoria } = require("../db.js");

const router = Router();

//DELETE categorias con id
router.delete("/:id", isAdmin, async (req, res, next) => {
  try {
    const id = req.params.id;
    const catABorrar = await Categoria.findByPk(id);
    await catABorrar.destroy();
    res.json({ msg: "borrado" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
