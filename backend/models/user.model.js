import mongoose from "mongoose";

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
    // cartId: { 
    //     type: Schema.Types.ObjectId, 
    //     ref: 'Cart', // Assuming your cart collection is named 'Cart' 
    //     // required: true commented out until cart schema is added
    //     // make sure to add || !user.cartId in controller
    // }

}, {
    timestamps: true // createdAt, updatedAt
});

const User = mongoose.model('User', userSchema);

export default User
