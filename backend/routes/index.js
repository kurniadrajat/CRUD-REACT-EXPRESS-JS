import express from "express"
import {
    getAllProducts,
    createProducts,
    getProductsById,
    updateProducts,
    deleteProducts,
    //exportProducts
} from "../controllers/products.js";

const  router =express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductsById);
router.post('/',createProducts);
router.patch('/:id',updateProducts);
router.delete('/:id',deleteProducts);
//router.get('/downloadExcel',exportProducts);


export default router;
