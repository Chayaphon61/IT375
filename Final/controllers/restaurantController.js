const Finals = require('./../models/restaurantModel');
exports.getAllRestaurants =async(req,res) => {
    try {
        const finals = await Finals.find();
        res.status(200).json(
            {
        status:'success',
        results: finals.length,
        data: {finals}
        });
        }catch (err){
        res.status(404).json({
        status: 'fail',
        message: err
        });}
};
exports.getRestaurant = async(req, res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const finals = await Finals.findOne({id: restaurantId});
        if(finals){
        res.status(200).json({
        status:'success',
        data: {finals}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status:'fail',
        message: err
        });
        
        }
};
exports.createRestaurant = async(req,res) => {
   try{
   /*  const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json({
    status:'success',
    data: {restaurant: newRestaurant}
    });*/
    let currentRestaurantId = await Finals.find({}).sort({id: -1}).limit(1).then((lastRestaurant) => {
        return lastRestaurant[0].id

    });
    currentRestaurantId += 1;
const creatRestaurant = {
id: currentRestaurantId,
...req.body
};
const newRestaurant = await Finals.create(creatRestaurant);
res.status(201).json({
status:'success',
data: {finals: newRestaurant}
});
    }catch(err){
    res.status(400).json({
    status:'fail',
    message: err
    });
    
    }
    };
exports.updateRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const finals = await Finals.findOneAndUpdate({id: restaurantId},req.body,{
        new: true,
        runValidators: true
        });
        if(finals){
        res.status(200).json({
        status:'success',
        data: {finals}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        }
};
exports.deleteRestaurant = async(req,res) => {
    try{
        const restaurantsId = parseInt(req.params.id);
        const finals = await Finals.findOneAndDelete({id: parseInt(restaurantsId)});
        if(finals){
        res.status(200).json({
        status:'success',
        data: null
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        
        }
};