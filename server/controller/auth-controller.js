const User = require("../database/userSchema");
const jwt = require("jsonwebtoken");

// Token Generator
const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      email: user.email
    },
    process.env.JWT_SECRET_KEY, // Match with userSchema
    { expiresIn: "7d" }
  );
};

// ===================
// ✅ Register Handler
// ===================
exports.register = async (req, res) => {
  try {
    const {
      fullName,
      company,
      email,
      phone,
      password,
      role,
      organizationId,
      preferences,
      demoRequested,
      demoRequestedAt
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists with this email." });
    }

    const newUser = await User.create({
      fullName,
      company,
      email,
      phone,
      password,
      role,
      organizationId,
      preferences,
      demoRequested,
      demoRequestedAt,
      audit: {
        createdBy: null, // You may update this with `req.user.id` if user registration is done by an admin
        updatedBy: null
      }
    });

    const token = createToken(newUser);

    res.status(201).json({
      msg: "Registration successful",
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        company: newUser.company,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        organizationId: newUser.organizationId,
        preferences: newUser.preferences,
        demoRequested: newUser.demoRequested,
        demoRequestedAt: newUser.demoRequestedAt,
        isVerified: newUser.isVerified,
        createdAt: newUser.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ===============
// ✅ Login Handler
// ===============
exports.login = async (req, res) => {
  try {
    const { email, password, mfaSecret } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({ msg: "User not found" });

    // Check if account is locked
    if (user.isAccountLocked()) {
      return res.status(403).json({ msg: "Account is locked. Try again later." });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      user.incrementFailedLoginAttempts();
      await user.save();
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // MFA check
    if (user.mfa.isEnabled && !user.verifyMFA(mfaSecret)) {
      return res.status(401).json({ msg: "Invalid MFA token" });
    }

    user.resetFailedLoginAttempts();
    user.loginMetadata.lastLogin = new Date();
    user.loginMetadata.failedLoginAttempts = 0;
    await user.save();

    const token = createToken(user);

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        company: user.company,
        email: user.email,
        phone: user.phone,
        role: user.role,
        organizationId: user.organizationId,
        preferences: user.preferences,
        demoRequested: user.demoRequested,
        demoRequestedAt: user.demoRequestedAt,
        isVerified: user.isVerified,
        createdAt: user.createdAt
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ============================
// ✅ Get Logged In User Info
// ============================
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ===============
// ✅ Logout Route
// ===============
exports.logout = async (req, res) => {
  res.status(200).json({ msg: "Logout successful" });
};
