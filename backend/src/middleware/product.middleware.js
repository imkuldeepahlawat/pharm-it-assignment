const mongoose = require('mongoose');
const Joi = require('joi');
const validMongoId = (req,res,next)=>{
    const id = req.params.productId; // Assuming the parameter name is "productId"
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid product ID' });
  }

  // ID is valid, proceed to the next middleware or route handler
  next();
}

const validInput = (req, res, next) =>{
    const schema = Joi.object({
      name: Joi.string().required(),
      qty: Joi.number().integer().min(0).required(),
    });
  
    const { error } = schema.validate(req.body);
  
    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(', ');
      return res.status(400).send({ message: errorMessage });
    }
  
    next();
  }
module.exports = {
    validMongoId,
    validInput
}