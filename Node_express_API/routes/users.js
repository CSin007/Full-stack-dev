import express from 'express';
// all routes here start with /users
import { createUser, getIDuser, getUser, delUser, patchUser } from '../controllers/users.js';


const router = express.Router();



router.get('/', getUser);
 

router.post('/',createUser);
// you cannot test this using browser since it only takes GET requests 
// so we will download postman for this  

// creating routes for id , aka each user

router.get('/:id', getIDuser); 

router.delete('/:id', delUser); 

router.patch('/:id', patchUser
); 
export default router;
