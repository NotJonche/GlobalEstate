const User = require("../models/User");
const bcrypt = require("bcrypt");
const validator = require("validator");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user_id) => {
  try {
    return JWT.sign({ user_id }, process.env.SECRET, { expiresIn: "3d" });
  } catch (err) {
    console.error("Error generating token:", err);
    throw new Error("Failed to generate token");
  }
};

const SignUp = (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    res.status(400).json({
      status: 0,
      mssg: "Please make sure to fill out all the fields!",
    });
  } else {
    const hash = bcrypt.hashSync(password, 10);
    if (!validator.isEmail(email)) {
      res.status(400).json({
        status: 0,
        mssg: "This email is invalid!",
      });
    } else {
      User.findOne({
        where: {
          email,
        },
      })
        .then((user) => {
          if (user) {
            res.status(500).json({
              status: 0,
              data: "This user exist",
            });
          } else {
            if (!validator.isStrongPassword(password)) {
              res.status(400).json({
                status: 0,
                mssg: "Password is not strong enough",
              });
            } else {
              User.create({
                name,
                email,
                password: hash,
                phone,
                role_id: 1,
              })
                .then((newUser) => {
                  const token = createToken(newUser.user_id);
                  res.status(200).json({
                    status: 1,
                    data: newUser,
                    token,
                  });
                })
                .catch((err) => {
                  res.status(500).json({
                    status: 0,
                    data: err,
                  });
                });
            }
          }
        })
        .catch((err) => {
          res.status(500).json({
            status: 0,
            data: err,
          });
        });
    }
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ mssg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ mssg: "Incorrect password" });
    }

    return res.status(200).json({ mssg: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ mssg: "Server error during login" });
  }
};

module.exports = { SignUp, Login };
