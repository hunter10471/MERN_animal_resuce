const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ownerName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    breed:{
        type:String,
        required:true
    },
    pictures:[
        {url:String,alt:String}
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