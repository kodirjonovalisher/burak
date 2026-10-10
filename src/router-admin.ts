import express from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/restuarant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** Restuarant */
routerAdmin.get("/", restuarantController.goHome);
routerAdmin
    .get("/login", restuarantController.getLogin)
    .post("/login", restuarantController.processLogin);

routerAdmin
    .get("/signup", restuarantController.getSignup)
    .post(
        "/signup", makeUploader("members").single("memberImage"),
        restuarantController.processSignup);

routerAdmin.get("/logout", restuarantController.logout);
routerAdmin.get("/check-me", restuarantController.checkAuthSession);

/** Product */

routerAdmin.get("/product/all",
    restuarantController.verifyRestuarnat,
    productController.getAllProducts);

routerAdmin.post("/product/create",
    restuarantController.verifyRestuarnat,
    //uploadProductImage.single("productImage"),
    makeUploader("products").array("productImages", 5),
    productController.createNewProduct);

routerAdmin.post("/product/:id",
    restuarantController.verifyRestuarnat,
    productController.updateChosenProduct);


/** Users */

routerAdmin.get("/user/all", restuarantController.verifyRestuarnat, restuarantController.getUsers);
export default routerAdmin;













