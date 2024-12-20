import bcrypt from 'bcrypt'
import userData from '../Model/User.js'
import loginData from '../Model/Login.js'
import doctData from '../Model/Doctor.Model.js';

/* function for user registration and username, password and role need to store in the backend */
export const userRegistration = async (req, res) => {
    const { userFullname, userEmail, city, state, pincode, userName, userPassword } = req.body;
    console.log(req.body);

    if (
        !userFullname ||
        !userEmail ||
        !city ||
        !state ||
        !pincode ||
        !userName ||
        !userPassword
    ) {
        return res.status(400).json({ message: "please fill all fields" });
    }

    try {
        const existingUser = await userData.findOne({ userEmail });
        const existingUserName = await loginData.findOne({ username: userName });  
        
        if (existingUserName) {
            console.log("Username is already taken");
            return res.status(400).json({ message: "Username already taken", success:false });  
        }
        
        if (existingUser) {
            console.log("Email is already taken");
            return res.status(400).json({ message: "Email already taken", success:false });
        }

        const hashedPassword = await bcrypt.hash(userPassword, 10);

        const login = await loginData.create({
            username: userName,  
            password: hashedPassword,
            role: 'user',
        });

        await userData.create({
            commonKey: login._id,
            userFullname,
            userEmail,
            city,
            state,
            pincode,
        });

        res.status(201).json({ message: "User created successfully", successL:true });
    } catch (error) {
        console.log("Error at registering:", error.message);
        res.status(500).json({ message: "Internal server error", success:false });
    }
};

/* function for registration and username, password and role need to store in the Login table */
export const doctorRegistration = async(req, res) => {
    const { doctorName, doctorEmail, doctorNumber, doctorAddress, doctorQualification, userName, userPassword } = req.body

    if (
        !doctorName ||
        !doctorEmail ||
        !doctorNumber ||
        !doctorAddress ||
        !doctorQualification ||
        !userName ||
        !userPassword
    ){
        return res.status(400).json({ message: "please fill all fields", success:false });
    }

    try {
        const existingDoctor = doctData.findOne({ doctorEmail })
        const existingUserName = loginData.findOne({ username: userName }) 

        if(existingDoctor){
            return res.status(400).json({ message: "Doctor with same email exist" })
        }
        if (existingUserName){
            return res.status(400).json({ message: "Username already taken by other user", success:false })
        }
        

    } catch (error) {
        
    }
}