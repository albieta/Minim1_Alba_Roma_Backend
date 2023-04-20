/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { addAdv, deleteAdv, deleteOrg, getOrg, getOrgs, postOrg, updateOrg } from "../controllers/organizations";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3009/organizations [GET]
 */
router.get("/all", getOrgs);
router.get("/:idOrg", getOrg);
router.post("/", postOrg);
router.put("/:idOrg", updateOrg);
router.post("/advertisers", addAdv);
router.delete("/advertiser", deleteAdv);
router.delete("/:idOrg", deleteOrg);


export { router };

