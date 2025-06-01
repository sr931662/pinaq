const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const newsSchema = new mongoose.Schema({
    _id: ObjectId,
    email: { 
      type: String, 
      required: true, 
      unique: true,
      lowercase: true 
    },
    subscribedAt: { 
      type: Date, 
      default: Date.now 
    },
    isActive: { 
      type: Boolean, 
      default: true 
    },
    source: { 
      type: String, 
      enum: ["homepage", "blog", "popup"] 
    }
  })