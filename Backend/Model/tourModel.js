const mongoose=require("mongoose");
const tourSchema=new mongoose.Schema({
     name: {
            type:String,
            required:true,
        },
        duration: {
            type:Number,
            required:true,
        },
        maxGroupSize: {
            type:Number,
            required:true,
        },
        difficulty: {
            type:String,
            required:true,
            enum:{
                values:['esay','medium','difficult'],
                message:"it can only limited to medium,difficult and easy",
            }
        },
        ratingsAverage: {
            type:Number,
            required:true,
            min:[1,"Rating must be 1.0"],
            max:[5,"Rating must be 5.0"],

        },
    ratingsQuantity: {
            type:Number,
            required:true,
        },
        price: {
            type:Number,
            required:true,
        },
        summary: {
            type:String,
            required:true,
        },
        description: {
            type:String,
            required:true,
        },
        imageCover: {
            type:String,
            required:true,
        },
        images: {type:[String],
        required:true},
        startDates: {
            type:[Date],
            required:true
        }
      },

)