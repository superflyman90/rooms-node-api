import { Router } from 'express';
import { postTest, getTest, addRoom, getRoom, getRooms, updateRoom, deleteRoom } from '../controllers/roomControllers.js';
import { catchErrors } from './../helpers.js';
const router = new Router();

router.get('/', (_, res) =>{
    res.send('<h1>Hello World </h1>')
});

router.get('/test', catchErrors(getTest));

router.post('/test', catchErrors(postTest));

router.post('/rooms', catchErrors(addRoom));
router.get('/rooms', catchErrors(getRooms));
router.get('/rooms/:id', catchErrors(getRoom));
router.patch('/rooms/:id', catchErrors(updateRoom));
router.delete('/rooms/:id', catchErrors(deleteRoom));

export default router;