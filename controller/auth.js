const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/auth');

// signup

exports.signup = (req, res) => {

    bcrypt.hash(req.body.password, 10, (error, hash) => {

        if (error) {

            return res.status(500).json({

                error: error

            });

        } else {

            const user = new User({
                _id: new mongoose.Types.ObjectId,
                fullName: req.body.fullName,
                email: req.body.email,
                password: hash
            });

            user.save()
                .then((result) => {

                    res.status(200).json({

                        newUser: result

                    })
                })
                .catch((error) => {

                    console.log('error: ', error);

                    res.status(500).json({

                        error: error

                    });

                })

        }

    });
}

// login

exports.login = (req, res) => {

    User.find({ email: req.body.email })

        .then((user) => {

            console.log('user: ', user);

            if (user.length < 1) {

                return res.status(404).json({

                    message: 'user not found'

                });

            } else {

                bcrypt.compare(req.body.password, user[0].password, (error, result) => {

                    if (!result) {

                        return res.status(401).json({

                            message: `password didn't matched`

                        })
                    }

                    const token = jwt.sign({

                        email: user[0].email,
                        fullName: user[0].fullName,
                        userType: 'user'

                    }, process.env.JWT_TOKEN, {

                        expiresIn: '30d'
                    });

                    res.status(200).json({

                        email: user[0].email,
                        fullName: user[0].fullName,
                        token: token

                    });

                });

            }

        })
        .catch((error) => {

            console.log('error: ', error);

            res.status(500).json({

                error: error
            });

        })

}

// admin login

exports.adminLogin = (req, res) => {
    const { userName, password } = req.body;

    // Check if userName and password are provided
    if (!userName || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Check if userName and password match the expected values
    if (userName !== 'admin' || password !== 'admin_12345') {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // If username and password are correct, generate JWT token
    const token = jwt.sign({
        email: 'a1consultancy.bpo1@gmail.com',
        fullName: 'a1consultancy',
        userType: 'admin'
    }, process.env.ADMIN_JWT_TOKEN, { expiresIn: '30d' });

    // Return token and user details
    res.status(200).json({
        email: 'a1consultancy.bpo1@gmail.com',
        fullName: 'a1consultancy',
        token: token
    });
};