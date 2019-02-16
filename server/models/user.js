// require modeuls for our User model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


let userSchema = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required'
    },
    /* taken out because passport will encrypted by passport local mongoose
    passport:{
        type: String,
        default:'',
        trim: true,
        required:'Password is required'
    }
    */
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'Email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
},

    {
        collection: "users"
    }

);

// configure options for the UserSchema

let options = ({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose,options);

module.exports.User = mongoose.model('User',userSchema);