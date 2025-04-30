const User = require("../models/User");
const bcrypt = require("bcrypt");
const validator = require("validator");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user_id) => {
  return JWT.sign({ user_id }, process.env.SECRET, { expiresIn: "3d" });
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

const Login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  if (!email || !password) {
    res.status(400).json({
      status: 0,
      mssg: "Please make sure to fill out all the fields!",
    });
  } else {
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(404).json({
            status: 0,
            data: "User not found",
          });
        } else {
          const isPasswordValid = bcrypt.compareSync(password, user.password);
          if (isPasswordValid === false) {
            res.status(401).json({
              status: 0,
              data: "The password is incorrect!",
            });
          } else {
            const token = createToken(user.user_id);
            res.status(200).json({
              status: 1,
              data: user,
              token,
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
};

module.exports = { SignUp, Login };
