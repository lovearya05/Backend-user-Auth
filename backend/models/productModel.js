const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product Price"],
        maxLength:[8,"Price Cannot Exceed 8 Characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
            type:String,
            required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"],
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter product Stock"],
        maxLength:[4,"Stock Cannot Exceed 4 character"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },

    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name:{
                type:String,
                requird:true,
            },          
            rating:{
                type:Number,
                requird:true,
            },
            comment: {
                type:String,
                requird:true
            }
        }    
    ],

    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Product",productSchema);