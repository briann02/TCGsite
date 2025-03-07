import mongoose from "mongoose";
import Product from "./product.model.js";
import User from "./user.model.js";

const cartSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    items: [{ 
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
        quantity: { type: Number, default: 1 } 
    }]
}, {
    timestamps: true // createdAt, updatedAt
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart
