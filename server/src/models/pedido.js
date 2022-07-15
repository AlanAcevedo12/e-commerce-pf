const { DataTypes, sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pedido", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pago_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direccion_de_envio: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: "En preparación",
      allowNull: true,
    },
    nroOperacion: {
      type: DataTypes.BIGINT,
      // unique: true
    }
  },{
    timestamps: false
});
};