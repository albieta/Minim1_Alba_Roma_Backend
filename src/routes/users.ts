/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { deletePerson, getPeople, getPerson, postPerson, updatePerson } from "../controllers/user";
import { logMiddleware } from "../middleware/log";
import { checkAdmin } from "../middleware/session";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/users [GET]
 */
router.get("/all", logMiddleware, getPeople);
router.get("/:idUser", getPerson);
router.post("/",postPerson);
router.put("/:idUser",updatePerson);
router.delete("/:idUser",checkAdmin,deletePerson);

export { router };

