const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/users');
const jwt=require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                message: 'User not found'
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(400).send({
                message: 'Invalid credentials'
            });
        }

        const token= jwt.sign({_id:user._id}, "secret");
        res.cookie('jwt', token,{
            httpOnly:true,
            maxAge: 24*60*60*1000,


        })


        res.send({
            message:'succes'
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/user', async (req,res)=>{
    try{
        const cookie=req.cookies['jwt'];
        const claims=jwt.verify(cookie,'secret')
      
        if(!claims){
            return res.status(401).send({
                message:'unauthentication'
    
            })
        }
        const user= await User.findOne({_id:claims._id});
        
    
        const {password, ...data}= await user.toJSON()

        res.send(data);
        

    } catch(e){
        return res.status(401).send({
            message:'unauthentication'

        })}
   

})

router.post('/logout', (req,res)=>{
    res.cookie('jwt', '', {maxAge:0})

    res.send({
        message:'success'
    })

})

module.exports = router;
