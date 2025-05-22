import mongoose from "mongoose";
import Cart from "./cart.model.js";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    accessLevel: {
        type: Number,
        enum: [1, 2],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cart',
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const User = mongoose.model('User', userSchema);

export default User
