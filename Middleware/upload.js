import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set up storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Determine the destination folder based on the field name
        if (file.fieldname === 'productImages') {
            cb(null, 'uploads/products'); // Store product images here
        } else if (file.fieldname === 'petImage') {
            cb(null, 'uploads/pets'); // Store pet images here
        } else {
            cb(new Error('Invalid file field')); // Reject if the field name is incorrect
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Prevent name collisions
    }
});

// File type validation (accept only jpeg, jpg, png)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Only images (jpeg, jpg, png) are allowed!'));
    }
};

// Initialize Multer with the storage engine, file filter, and size limit (10MB)
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB file size limit
});

// Ensure the upload directories exist
const ensureDirectoriesExist = () => {
    const productDir = 'uploads/products'; // Fixed directory path
    const petDir = 'uploads/pets';

    if (!fs.existsSync(productDir)) {
        fs.mkdirSync(productDir, { recursive: true });
    }

    if (!fs.existsSync(petDir)) {
        fs.mkdirSync(petDir, { recursive: true });
    }
};

// Call this function when your app starts to ensure the directories are created
ensureDirectoriesExist();

export default upload;
