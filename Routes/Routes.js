import express from 'express';
import { doctorRegistration, getAlldoct, getAllShops, getAllUsers, shopRegistration, userRegistration } from '../Controller/Controller.js';

const route = express.Router();

route.post('/userregistration', userRegistration);
route.post('/doctorreg', doctorRegistration)
route.get('/getallusers', getAllUsers)
route.get('/getalldoctors', getAlldoct)
route.post('/shopreg', shopRegistration)
route.get('/shops', getAllShops)

export default route;
