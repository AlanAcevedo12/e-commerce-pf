const { Usuario } = require("../db");
const { generarJWT } = require("../helpers/generarJWT");
const googleAuth = async (req, res) => {
  const { user } = req.body;
  console.log(user);

  if (user.email_verified) {
    try {
      const usuario = await Usuario.findOne({
        where: { mail: user.email },
      });

      if (!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(400).json({ msg: error.message });
      }
      const token = generarJWT(usuario.id);

      res.cookie("jwt", token);
      return res.status(200).json({
        name: usuario.nombre,
        email: usuario.mail,
        isAdmin: usuario.isAdmin,
        confirmado: usuario.confirmado,
        token: token,
        lastName: usuario.apellido,
        phone: usuario.telefono,
        address: usuario.direccion,
        dni: usuario.dni,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return res
      .status(400)
      .json({ msg: `El usuario no tiene una cuenta verificada con gmail` });
  }
};

module.exports = googleAuth;
