// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    // console.log(token);
    if (token) {
        jwt.verify(token, "secretKey", (err, decoded) => {
            if (err) return res.json({
                // isLoggedIn: false,
                message: "Failed To Authenticate"
            });
            // console.log(decoded);
            req.user = {
                userName: decoded.userName,
                userEmail: decoded.userEmail,
                userPassword: decoded.userPassword
            };
            next();
        })
    } else {
        return res.json({ message: "Incorrect Token Given", isLoggedIn: false });
    }
}
