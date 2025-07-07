import salesModel from "../models/sales.js"

const salesController = {};

salesController.getAllSales = async (req,res)=>{
    try {
        const sales = await salesModel.find();
        res.status(200).json(sales)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message:"internal server error"})
        
    }
}

salesController.insertSales = async (req,res)=>{
    try {
        const { Products,Category,Customer,Total}=req.body;

        if(Total< 0){
            return res.status(400).json({message:"inserte valores validos"})
        }

        const newSales = new salesModel({Products,Category,Customer,Total})
        await newSales.save();

        res.status(200).json({message:"guardado"})
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message:"internal server eeor "})
        
    }
}



salesController.getSalesByCategory = async (req,res)=>{

try {
    
    const resultado = await salesModel.aggregate(

        [
            {
                $group: {
                    _id: "$Category",
                    totalVentas: { $sum: "$Total" },
                }
            },
            {
                $sort: { totalVentas: -1 } 
            }
           
        ]
    )
    res.status(200).json(resultado); 
} catch (error) {
    console.log("error"+error)
    res.status(500).json({message:"internal server error"})
}

};

salesController.getMostSaledProducts = async (req,res)=>{
try {
    
    const resultado = await salesModel.aggregate(
        [
            {
                $group: {
                    _id: "$Products",
                    totalVentas: { $sum: 1 },
                }
            },
            {
                $sort: { totalVentas: -1 } 
            },
            {
                $limit: 3 // Limitar a los 3 productos más vendidos
            }

           
        ]
    )
    res.status(200).json(resultado); 
} catch (error) {
    console.log("error"+error)
    res.status(500).json({message:"internal server error"})
}
};

salesController.TotalEarnings = async (req,res)=>{
try {
    
    const resultado = await salesModel.aggregate(
        [
            {
                $group: {
                    _id: null,
                    totalEarnings: { $sum: "$Total" },
                }
            }
        ]
    )
    res.status(200).json(resultado); 
} catch (error) {
    console.log("error"+error)
    res.status(500).json({message:"internal server error"})
}
}

export default salesController;