import express from 'express';
import { userRegistration } from '../Controller/Controller.js';

const route = express.Router();

route.post('/userregistration', userRegistration);

export default route;
