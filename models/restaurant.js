const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review.js')

const imageSchema = new Schema({
    url: String,
    filename: String
});

const itemSchema = new Schema({
    name : {
        type : String,
    },

    price : {
        type : Number,
    },

    veg : {
        type : Boolean,
    },

    vegan : {
        type : Boolean,
    },

    description : {
        type : String
    },

    signature : {
        type : Boolean
    },

    image : {
        type : [imageSchema]
    }
})

const RestaurantSchema =  new Schema({
    name : {
    type : String
    },

    rating : {
    type : Number
    },

    description : {
    type : String
    },
    
    cuisines:{
        type:Array
    },

    avgPrice:{
        type:Number
    },

    vegan : {
        type : Boolean
    },

    items : {
        type:[itemSchema]
    }, 

    itemCount : {
        type : Number,
        min : 0
    },

    location : {
        type : String,
    },

    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : Review
        }
    ]
});

module.exports = mongoose.model('Restaurant' , RestaurantSchema)
