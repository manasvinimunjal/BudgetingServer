const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//id,name and description
const BudgetSchema = new mongoose.Schema({
    //adding user to our model -> class 4-> authenticating and registering a user.
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
   name: {
       type: String,
       required:true
   },
   budgeted: {
       type:Number,
       required:true
   }
   

});

module.exports = Budget = mongoose.model('budget', BudgetSchema);