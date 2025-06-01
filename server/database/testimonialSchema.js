const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const testimSchema = new mongoose.Schema({
    _id: ObjectId,
    author: { 
      type: String, 
      required: true 
    },
    position: { 
      type: String, 
      required: true 
    },
    company: { 
      type: String, 
      required: true 
    },
    content: { 
      type: String, 
      required: true 
    },
    avatar: String,
    featured: { 
      type: Boolean, 
      default: false 
    },
    order: { 
      type: Number, 
      default: 0 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
  })