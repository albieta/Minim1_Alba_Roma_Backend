/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Router } from "express";
import {registerCtrl, loginCtrl, tokenCtrl} from "../controllers/auth"
import { checkAdmin, checkJwt } from "../middleware/session";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/** http://localhost:3002/auth/register [POST] */
router.post("/register", registerCtrl);
/** http://localhost:3002/auth/login [POST] */
router.post("/login", loginCtrl);

router.get("/tokenVerification", checkAdmin, tokenCtrl); 

export {router};
