import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Login',
        required: true
    },
    products: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, min: 1 }
        }
    ],
    total: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    }
});

const cartData = mongoose.model('Cart', cartSchema);
export default cartData;
