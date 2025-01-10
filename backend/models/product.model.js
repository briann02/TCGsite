import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    game: { 
        type: String, 
        enum: ['pkm','ygo', 'mtg', 'spt'],
        required: true 
    },
    productType: {
        type: String,
        enum: ['booster_box','etb', 'booster_bundle', 'singles', 'starter_deck'],
        required: true 
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }

}, {
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;