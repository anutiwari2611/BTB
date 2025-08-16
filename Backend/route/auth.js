const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const router = express.Router();
const adminEmails = ["anuragt2611@gmail.com", "admin2@example.com", "admin3@example.com"];
//Signup
router.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;
    try
    {

    const exist=await User.findOne({email})
    if(exist)return res.status(400).json({message:" User already exists"})
        
        const hashed = await bcrypt.hash(password, 10);
         const role = adminEmails.includes(email) ? 'admin' : 'user';
    const newUser = await User.create({ name, email, password: hashed,role });
    res.status(201).json({ message: `User registered ${role} `});
}
catch(err){
    res.status(500).json({message:err.message})


}
})
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "10h" }
    );

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;