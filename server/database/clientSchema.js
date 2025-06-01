const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const clientSchema = new mongoose.Schema({
    _id: ObjectId,
    name: { 
      type: String, 
      required: true 
    },
    logo: { 
      type: String, 
      required: true 
    },
    website: String,
    order: { 
      type: Number, 
      default: 0 
    },
    isActive: { 
      type: Boolean, 
      default: true 
    }
  })