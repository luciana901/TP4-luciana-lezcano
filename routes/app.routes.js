const express=require('express');
const routes=express.Router();
const controller=require('../controllers/controller.js');

routes.get('/',controller.vistaGet);

routes.post('/',controller.vistaPost);

routes.put('/',controller.vistaPut);

routes.delete('/',controller.vistaDelete);

// Exporta las rutas //
module.exports=routes;
