const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    console.log(req.headers.authorization);

    try {

        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token, process.env.JWT_TOKEN);

        console.log('verify: ', verify);

        if (verify.userType == 'user') {

            next();

        } else {

            return res.status(401).json({

                error: 'user is not valid'

            });
        }

    } catch (error) {

        return res.status(401).json({

            message: 'not a valid user'

        });
    }
}