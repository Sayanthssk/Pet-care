import bcrypt from 'bcrypt'
import userData from '../Model/User.js'
import loginData from '../Model/Login.js'
import doctData from '../Model/Doctor.Model.js';
import shopdata from '../Model/Shop.Model.js';
import productData from '../Model/shop.Product.js';
import cartData from '../Model/user.Cart.js';

/* function for user registration and username, password and role need to store in the backend */
export const userRegistration = async (req, res) => {
    const { userFullname, userEmail, city, state, pincode, userName, userPassword, role } = req.body;
    console.log(req.body);

    if (
        !userFullname ||
        !userEmail ||
        !city ||
        !state ||
        !pincode ||
        !userName ||
        !userPassword ||
        !role
    ) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    if (!['buyer', 'seller'].includes(role)) {
        return res.status(400).json({ message: "Invalid role selected" });
    }

    try {
        const existingUser = await userData.findOne({ userEmail });
        const existingUserName = await loginData.findOne({ username: userName });  
        
        if (existingUserName) {
            console.log("Username is already taken");
            return res.status(400).json({ message: "Username already taken", success: false });  
        }
        
        if (existingUser) {
            console.log("Email is already taken");
            return res.status(400).json({ message: "Email already taken", success: false });
        }

        const hashedPassword = await bcrypt.hash(userPassword, 10);

        const login = await loginData.create({
            username: userName,  
            password: hashedPassword,
            role: role,  // Save the role as buyer or seller
        });

        await userData.create({
            commonKey: login._id,
            userFullname,
            userEmail,
            city,
            state,
            pincode,
        });

        res.status(201).json({ message: "User created successfully", success: true });
    } catch (error) {
        console.log("Error at registering:", error.message);
        res.status(500).json({ message: "Internal server error", success: false });
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
        const existingDoctor = await doctData.findOne({ doctorEmail })
        const existingUserName = await loginData.findOne({ username: userName }) 

        if(existingDoctor){
            return res.status(400).json({ message: "Doctor with same email exist" })
        }
        if (existingUserName){
            return res.status(400).json({ message: "Username already taken by other user", success:false })
        }
        
        const hashedPassword = await bcrypt.hash(userPassword, 10)
        const login = await loginData.create({
            username: userName,
            password: hashedPassword,
            role: "doctor",
        })

        await doctData.create({
            commonkey: login._id,
            doctorName,
            doctorEmail,
            doctorNumber,
            doctorAddress,
            doctorQualification,
        })
        res.status(201).json({ message: "User created successfully", success:true });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message:"server error", success:false })
    }
}

/* function to get all users */
export const getAllUsers = async (req, res) => {
    try {
        const users = await userData.find({})
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message:"server error", success:false })
    }
}


export const getAlldoct = async(req, res) => {
    try {
        const doct = await doctData.find({})
        res.status(200).json(doct);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message:"server error", success:false })
    }
}


/* function for shop registration and username password moving to Login schema */
export const shopRegistration = async (req, res) => {
    try {
        const { shopName, shopAddress, shopPhone, shopEmail, userName, userPassword } = req.body
        if (
            !shopName ||
            !shopAddress ||
            !shopPhone ||
            !shopEmail ||
            !userName ||
            !userPassword
        ) {
            return res.status(400).json({ message: "all fields are required", success:false })
        }
        const existingShop = await shopdata.findOne({ shopEmail })
        if (existingShop) {
            return res.status(400).json({ message: "Shop with same email exist", success:false })
        }

        const existingShopuser = await loginData.findOne({ username: userName })
        if (existingShopuser) {
            return res.status(400).json({ message: "User with same username exist", success:false})
            }
        
        const hashedPassword = await bcrypt.hash(userPassword, 10)

        const shopLogin = await loginData.create({
            username: userName,
            password: hashedPassword,
            role: 'shop'
        })

        await shopdata.create({
            commonkey: shopLogin._id,
            shopName: shopName,
            shopAddress: shopAddress,
            shopPhone: shopPhone,
            shopEmail: shopEmail
        })
        res.status(200).json({ message: "Shop registered Successfully", success:true })
    } catch (error) {
        console.log(error.message)
        return res.status(500).message({ message:"internal server error", success:false })
    }
}


export const getAllShops = async (req, res) => {
    try {
        const shops = await shopdata.find({ })
        res.status(200).json({ shops, success:true })
    } catch (error) {
        return res.status(500).json({ message: "internal server  error" })
    }
}

// function for addin the product by the shop by storing shopid

export const AddProduct = async(req, res) => {
    try {
        const { shopId, name, price, description, productImage } = req.body
        const existingProduct = await productData.findOne({ name: name, shopId })
        if (existingProduct) {
            return res.status(400).json({ message: "Product with same name exist", success:false})
        }
        
    } catch (error) {
        
        return res.status(500).json({ message: "internal server error", success: false })
    }
}



export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await loginData.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid username" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const { role, _id: id } = user;

        let userDetails;

        if (role === "buyer") {
            userDetails = await userData.findOne({ commonKey: id }).lean();
        } else if (role === "doctor") {
            userDetails = await doctData.findOne({ commonkey: id }).lean();
        } else if (role === "shop") {
            userDetails = await shopdata.findOne({ commonkey: id }).lean();
        } else if (role === "seller") {
            userDetails = await userData.findOne({ commonKey: id }).lean();           
        }

        if (!userDetails) {
            return res.status(404).json({ message: "User details not found" });
        }

        const response = {
            id,
            role,
            username: user.username,
            userDetails
        };

        return res.status(200).json({
            message: "Login successful",
            data: response,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

