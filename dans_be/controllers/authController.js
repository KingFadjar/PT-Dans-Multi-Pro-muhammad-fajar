const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByUsername, createUser } = require("../models/userModel");

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { login };
