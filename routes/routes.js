import { Router } from 'express';
import { postTest, getTest, addRoom, getRoom, getRooms, updateRoom, deleteRoom } from '../controllers/roomControllers.js';
import { catchErrors } from './../helpers.js';
const router = new Router();

router.get('/', (_, res) =>{
    res.send('<h1>Hello World </h1>')
});

router.get('/test', catchErrors(getTest));

router.post('/test', catchErrors(postTest));

router.post('/room', catchErrors(addRoom));
router.get('/room', catchErrors(getRooms));
router.get('/room/:id', catchErrors(getRoom));
router.patch('/room/:id', catchErrors(updateRoom));
router.delete('/room/:id', catchErrors(deleteRoom));

export default router;