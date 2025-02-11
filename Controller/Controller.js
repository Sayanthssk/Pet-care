import bcrypt from 'bcrypt'
import userData from '../Model/User.js'
import loginData from '../Model/Login.js'
import doctData from '../Model/Doctor.Model.js';
import shopdata from '../Model/Shop.Model.js';
import productData from '../Model/shop.Product.js';
import cartData from '../Model/user.Cart.js';
import moneydata from '../Model/MoneyModel.js';
import upload from '../Middleware/upload.js';

/* function for user registration and username, password and role need to store in the backend */
export const userRegistration = async (req, res) => {
    const { userFullname, userEmail, city, state, pincode, userName, userPassword, role } = req.body;
    

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
            verify: "true"
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

export const AddProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const shopId = req.params.shopId;

        // Validate required fields
        if (!name || !price || !description) {
            return res.status(400).json({ message: "Name, price, and description are required" });
        }

        // Extract product images from the request
        const productImages = req.files ? req.files.map(file => file.filename) : [];

        // Create a new product entry associated with the shop
        const newProduct = new productData({
            shopId,
            name,
            price,
            description,
            productImage: productImages,
        });

        // Save the new product to the database
        await newProduct.save();

        res.status(201).json({ message: "Product added successfully", newProduct });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
};

// function to view all products

export const viewAllProducts = async (req, res) => {
    try {
        const products = await productData.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "server error" });  
    }
}


export const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productData.findByIdAndDelete({ _id: id })
        if (!product) {
            return res.status(404).json({ message: "Product not found "})
        }
        return res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message:"server error" })
    }
}



export const AddtoCart = async (req, res) => {
    try {
        const { userId, products, total, status } = req.body;

        // Validate required fields
        if (!userId || !products || !Array.isArray(products)) {
            return res.status(400).json({ message: "Invalid input data" });
        }

        // Validate userId format
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid userId format" });
        }

        // Create and save the cart
        const newCart = new cartData({ userId, products, total, status });
        await newCart.save();

        res.status(201).json(newCart);
    } catch (error) {
        console.error("Error in AddtoCart:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};




export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await loginData.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid username" });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Get the user's role and ID
        const { role, _id: id } = user;

        let userDetails;

        // Fetch user details based on the role
        if (role === "buyer") {
            userDetails = await userData.findOne({ commonKey: id }).lean();
        } else if (role === "doctor") {
            userDetails = await doctData.findOne({ commonkey: id }).lean();
        } else if (role === "shop") {
            userDetails = await shopdata.findOne({ commonkey: id }).lean();
            console.log('Shop details:', userDetails); // Debugging line to check if the details are fetched
        } else if (role === "seller") {
            userDetails = await userData.findOne({ commonKey: id }).lean();
        } else if (role === "admin") {
            // For admin, no need to fetch additional details
            userDetails = null;
        }

        if (!userDetails && role !== "admin") {
            return res.status(404).json({ message: "User details not found" });
        }

        const response = {
            id,
            role,
            username: user.username,
            userDetails: role === "admin" ? null : userDetails || {}, // Ensure empty object fallback
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



/* function to delete user and data from the logindata table also deleted */
export const DeleteUser = async(req, res) => {
    try {
        const { id } = req.params
        const user = await loginData.findByIdAndDelete({ _id: id })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        await userData.findOneAndDelete({ commonKey: id });
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ message: "Server error" })
    }
}

/* function for user to refill the money */
export const refillMoney = async (req, res) => {
    try {
        const { commonkey } = req.params;
        const { money } = req.body;

        if (!money) {
            return res.status(400).json({ message: "Money amount is required" });
        }

        const existingMoney = await moneydata.findOne({ commonkey });

        if (existingMoney) {
            existingMoney.money += money;
            await existingMoney.save();
            return res.status(200).json({ message: "Money refilled successfully", data: existingMoney });
        } else {
            const newMoneyEntry = new moneydata({ commonkey, money });
            await newMoneyEntry.save();
            return res.status(201).json({ message: "Money added successfully", data: newMoneyEntry });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}