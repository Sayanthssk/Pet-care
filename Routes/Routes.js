import express from 'express';
import { doctorRegistration, getAllUsers, userRegistration } from '../Controller/Controller.js';

const route = express.Router();

route.post('/userregistration', userRegistration);
route.post('/doctorreg', doctorRegistration)
route.get('/getallusers', getAllUsers)

export default route;
