const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minlength: 2,
    maxlength: 100
  },

  company: {
    type: String,
    required: [true, "Company is required"],
    trim: true,
    maxlength: 100
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address"
    ]
  },

  phone: {
    type: String,
    trim: true,
    match: [
      /^\+?[0-9]{10,15}$/,
      "Please enter a valid phone number"
    ]
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    select: false // Ensures password is not returned in queries by default
  },

  role: {
    type: String,
    enum: ['admin', 'analyst', 'viewer'],
    default: 'viewer'
  },

  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },

  isVerified: {
    type: Boolean,
    default: false
  },

  resetToken: String,
  resetTokenExpiration: Date,

  preferences: {
    newsletter: {
      type: Boolean,
      default: false
    },
    notifyOnThreat: {
      type: Boolean,
      default: true
    }
  },

  demoRequested: {
    type: Boolean,
    default: false
  },

  demoRequestedAt: {
    type: Date
  },

  loginMetadata: {
    lastLogin: Date,
    loginIP: String,
    loginDevice: String,
    failedLoginAttempts: {
      type: Number,
      default: 0
    },
    accountLockedUntil: Date
  },

  mfa: {
    isEnabled: {
      type: Boolean,
      default: false
    },
    secret: String,  // Store the MFA secret key for the user
    lastUsed: Date
  },

  audit: {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Pre-save middleware for hashing password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// Method for comparing passwords during login
userSchema.methods.comparePassword = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;  // Returns true if passwords match, false otherwise
  } catch (err) {
    throw new Error("Error comparing passwords");
  }
};

// Method to handle MFA secret generation and verification
userSchema.methods.generateMFASecret = function () {
  const secret = crypto.randomBytes(16).toString('hex');
  this.mfa.secret = secret;
  return secret;
};

userSchema.methods.verifyMFA = function (enteredSecret) {
  return this.mfa.secret === enteredSecret;
};

// Method to check if the account is locked due to too many failed login attempts
userSchema.methods.isAccountLocked = function () {
  if (this.loginMetadata.accountLockedUntil && new Date() < this.loginMetadata.accountLockedUntil) {
    return true;
  }
  return false;
};

// Method to reset failed login attempts and lockout period after a successful login
userSchema.methods.resetFailedLoginAttempts = function () {
  this.loginMetadata.failedLoginAttempts = 0;
  this.loginMetadata.accountLockedUntil = null;
};

// Method to increment failed login attempts and lock the account after too many attempts
userSchema.methods.incrementFailedLoginAttempts = function () {
  this.loginMetadata.failedLoginAttempts += 1;

  // Lock the account for 1 hour if there are more than 5 failed attempts
  if (this.loginMetadata.failedLoginAttempts >= 5) {
    this.loginMetadata.accountLockedUntil = new Date(new Date().getTime() + 60 * 60 * 1000); // Lock for 1 hour
  }
};

// Generate JWT Token
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { userId: this._id, role: this.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1h' } // Token expiration
  );
};

const User = mongoose.model("User", userSchema);
module.exports = User;
