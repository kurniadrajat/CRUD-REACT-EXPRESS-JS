import Product from "../models/productModel.js";
//const  excelJS= require("exceljs");
export const getAllProducts =async (req,res)=>
{
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (e) {
        res.json({message:e.message});
    }
}

export const getProductsById =async (req,res)=>
{
    try {
        const prodcts = await Product.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(prodcts[0]);
    } catch (e) {
        res.json({message:e.message});
    }
}

export const createProducts =async (req,res)=>
{
    try {
        await Product.create(req.body);
        res.json({
            "message" : "Product Created"
        });
    } catch (e) {
        res.json({message:e.message});
    }
}

export const updateProducts =async (req,res)=>
{
    try {
        await Product.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message" : "Product Updated"
        });
    } catch (e) {
        res.json({message:e.message});
    }
}

export const deleteProducts =async (req,res)=>
{
    try {
        await Product.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message" : "Product deleted"
        });
    } catch (e) {
        res.json({message:e.message});
    }
}

/*export const exportProducts =async (req,res)=>
{
    const workbook = new excelJS.Workbook();  // Create a new workbook
    const worksheet = workbook.addWorksheet("My Products"); // New Worksheet
    const path = "./controllers";  // Path to download excel
    // Column for data in excel. key must match data key
    worksheet.columns = [
        { header: "No.", key: "s_no", width: 10 },
        { header: "Title", key: "title", width: 10 },
        { header: "Price", key: "price", width: 10 },
    ];

    /*try {
        const prodcts = await Product.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(prodcts[0]);
    } catch (e) {
        res.json({message:e.message});
    }

    // Looping through Products data
    let counter = 1;
    Product.forEach((user) => {
        user.s_no = counter;
        worksheet.addRow(user); // Add data in worksheet
        counter++;
    });
    // Making first line in excel bold
    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });
    try {
        const data = await workbook.xlsx.writeFile(`${path}/products.xlsx`)
            .then(() => {
                res.send({
                    status: "success",
                    message: "file successfully downloaded",
                    path: `${path}/users.xlsx`,
                });
            });
    } catch (err) {
        res.send({
            status: "error",
            message: "Something went wrong",
        });
    }
}*/
