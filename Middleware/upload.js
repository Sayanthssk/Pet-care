import multer from 'multer';
import path from 'path';

// Set up storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Determine the directory based on the field name
        if (file.fieldname === 'productImage') {
            cb(null, 'uploads/products'); // Directory for product images
        } else if (file.fieldname === 'doctorProfileImage') {
            cb(null, 'uploads/doctorProfiles'); // Directory for doctor profile images
        } else if (file.fieldname === 'shopImage') {
            cb(null, 'uploads/shops'); // Directory for shop images
        } else if (file.fieldname === 'petImage') {
            cb(null, 'uploads/pets'); // Directory for pet images
        } else {
            cb(new Error('Invalid file field')); // Handle invalid fields
        }
    },
    filename: (req, file, cb) => {
        // Add timestamp to filename to prevent collisions
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// File type validation
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!'); // Only accept image files
    }
};

// Initialize Multer with the storage engine and file filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 10 }, // Set file size limit to 10 MB
});

export default upload;
