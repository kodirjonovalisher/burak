import express from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/restuarant.controller";
import productController from "./controllers/product.controller";

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

routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin
    .post("/product/create", productController.createNewProduct)
    .put("/product/:id", productController.updateChosenProduct);


/** Users */

export default routerAdmin;













