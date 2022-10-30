import Joi from "joi";

const loginBodyValidators = Joi.object()
.keys({
    phone_no : Joi.string().required(),
    password : Joi.string().required() 
})
   

export {
    loginBodyValidators
}