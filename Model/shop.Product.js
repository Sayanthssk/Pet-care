/* model for the produt adding */

import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    shopId:{ type:Schema.Types.ObjectId, ref:'Shop' },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    productImage: { type: String, required: true },
})

const productData = mongoose.model('Product', productSchema)
export default productData  