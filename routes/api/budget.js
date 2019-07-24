const express = require('express');
const config = require('config');

const Budget = require('../../models/Budget');

const auth = require('../../middleware/auth');


const router = express.Router();

router.get('/', (req,res)=>{
    try{
     Budget.find()
       .sort({name: -1})
       .then(budget => res.json(budget))
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("server error");
    }

})


router.post('/', async(req,res)=>{
    try{
        const newTask= new Budget({
        
          
            name: req.body.name,
            budgeted: req.body.budgeted,
            
        });
  const Task2 = await newTask.save();
  
  res.send(Task2);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("server error");
    }

});

router.delete('/:id', (req,res)=> {
Budget.findById(req.params.id)
.then(category=> category.remove().then(()=> res.json({success:true})))
.catch(err=>res.status(404).json({success:false}));
});
module.exports = router;