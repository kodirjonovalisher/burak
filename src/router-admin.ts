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

routerAdmin.get("/logout", restuarantController.logout);
routerAdmin.get("/check-me", restuarantController.checkAuthSession);

/** Product */
/** Users */

export default routerAdmin;













