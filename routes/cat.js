import express from 'express';
import routerControllers from '../controllers/cat.js';

const router = express.Router();

router.get('/', routerControllers.getCats);
router.get('/:id', routerControllers.getCat)
router.post('/', routerControllers.addCat);
router.put('/:id', routerControllers.updateCat);
router.delete('/:id', routerControllers.deleteCat);
export default router
