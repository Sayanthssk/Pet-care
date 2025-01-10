import mongoose, { Schema } from "mongoose";

/* model for cart */
const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    products: {
        type: Array,
        default: []
    },
    total: {
        type: Number,
        default: 0
        },
        status: {
            type: String,
            default: 'pending'
            },
   
})
const cartData = mongoose.model('Cart', cartSchema)
export default cartData 