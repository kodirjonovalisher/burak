import express from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/restuarant.controller";

/** Restuarant */
routerAdmin.get("/", restuarantController.goHome);
routerAdmin
    .get("/login", restuarantController.getLogin)
    .post("/login", restuarantController.processLogin);

routerAdmin
    .get("/signup", restuarantController.getSignup)
    .post("/signup", restuarantController.processSignup);

/** Product */
/** Users */

export default routerAdmin;













