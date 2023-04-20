/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { getFriends, getFriend, getFriendsOfUser, postFriend, putFriend, deleteFriend, updateFriend } from "../controllers/friend";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/friends [GET]
 */
router.get("/all", getFriends);
router.get("/:idFriend", getFriend);
router.get("/user/:idUser", getFriendsOfUser);
router.post("/",postFriend);
router.delete("/:idFriend",deleteFriend);
router.put("/:idFriend", updateFriend);
router.put("/:idUser/:idFriend",putFriend);

export { router };
