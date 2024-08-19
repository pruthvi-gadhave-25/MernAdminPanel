const Service = require("../models/service-model")

const services = async (req, res) => {
    try {
            const response = await Service.find();
            
            if(!response){
                res.status(404).json({msg: "No Service Found"});
                return ;
            }
            res.status(200).json({response});
    } catch (error) {
            console.log(`services ${error}`);        
    }
}

module.exports = services
// {
//     service : "web developent ",
//     description: "creating websites ",
//     price : "$400",
//     Prvoder : "tech solutions"}
