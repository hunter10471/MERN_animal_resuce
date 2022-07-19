const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    age:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:'male'
    },
    breed:{
        type:String,
        default: 'Breed unspecified.'
    },
    pictures:[
        {url:String}
    ],
    vaccinated:{
        type: Boolean,
        default: false
    },
    favouriteFood:{
        type:String,
        default:null
    },
    litterTrained:{
        type:Boolean,
        default:false
    },
    previousOwners:[
        {
            ownerId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        }
    ],
    description:{
        type:String,
        default:null
    },
    punchline:{
        type:String,
        default:null
    },
    boldline:{
        type:String,
        default:null
    }

},{timestamps:true})

module.exports = mongoose.model('Pet',petSchema);