const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const caseSchema = new mongoose.Schema({
    _id: ObjectId,
    company: { 
      type: String, 
      required: true 
    },
    title: { 
      type: String, 
      required: true 
    },
    slug: { 
      type: String, 
      required: true, 
      unique: true 
    },
    challenge: { 
      type: String, 
      required: true 
    },
    solution: { 
      type: String, 
      required: true 
    },
    results: {
      before: { 
        type: String, 
        required: true 
      },
      after: { 
        type: String, 
        required: true 
      },
      description: String
    },
    featuredImage: { 
      type: String, 
      required: true 
    },
    publishedAt: { 
      type: Date, 
      default: Date.now 
    },
    isActive: { 
      type: Boolean, 
      default: true 
    },
    order: { 
      type: Number, 
      default: 0 
    }
  })