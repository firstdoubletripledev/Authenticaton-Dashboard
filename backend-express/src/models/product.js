import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    baseCost: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
});

// productSchema.pre("save", (next) => {
//     console.log("productSchema > pre > save", this);
//     this.baseCost = parseFloat(this.baseCost);
//     this.price = parseFloat(this.price);
//     this.amount = parseFloat(this.amount);
//     next();
// });

export default model("product", productSchema);