const { Router } = require("express");
const { Producto, Talle, Categoria } = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.get('/', async(req, res) => {

    const {name} = req.query

    //Traigo todos los productos de la db
    let productsSearch

    //Si no me pasan name por query, traigo todos los productos.
    if(!name) productsSearch = await Producto.findAll({include: [Talle, Categoria]});
    //Si me lo pasan, traigo los productos que tengan un nombre parecido.
    else productsSearch = await Producto.findAll({
        where:{
            nombre:{
                [Op.iLike]: `%${name}%`,
            }
        },
        include: [Talle, Categoria]
        
    }, );

    //Los mapeo para que no se vea la informacion innecesaria de sequelize
    const productos = productsSearch.map(p => {
        return p.dataValues
    })


    //Envio los productos como respuesta
    res.status(200).send(productos)


})


module.exports = router;
