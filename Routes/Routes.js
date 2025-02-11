import express from 'express';
import { AddProduct, DeleteProduct, DeleteUser, doctorRegistration, getAlldoct, getAllShops, getAllUsers, login, refillMoney, shopRegistration, userRegistration, viewAllProducts } from '../Controller/Controller.js';
import upload from '../Middleware/upload.js';

const route = express.Router();

route.post('/userregistration', userRegistration);
route.post('/doctorreg', doctorRegistration)
route.get('/getallusers', getAllUsers)
route.get('/getalldoctors', getAlldoct)
route.post("/addproduct/:shopId", upload.array("productImages"), AddProduct);
// route.post('/addproduct/:id', AddProduct);
route.get('/getallprod', viewAllProducts)
route.post('/shopreg', shopRegistration)
route.get('/shops', getAllShops)
route.delete('/delete/:id', DeleteUser)
route.post('/login', login)
route.post('/refill/:id', refillMoney)
route.delete('/deleteprod/:id', DeleteProduct)

export default route;