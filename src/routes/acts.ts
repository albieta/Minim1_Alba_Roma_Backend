/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { getActs, postAct, updateAct, deleteAct, getTheAct } from "../controllers/acts";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3009/acts [GET]
 */
router.get("/all", getActs);
router.get("/:idAct", getTheAct);
/**
 * http://localhost:3009/acts/ [POST]
 */
router.post("/",postAct);
router.put("/:idAct",updateAct);
router.delete("/:idAct",deleteAct);

export {router};
