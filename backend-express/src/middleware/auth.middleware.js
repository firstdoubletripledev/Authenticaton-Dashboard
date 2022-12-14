import { verify } from "jsonwebtoken";

export const verifyJwt = (req, res, next) => {
    const token = req.headers?.authorization.split(" ")[1];
    // console.log(token);
    if (token) {
        verify(token, "secretKey", (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    isLoggedIn: false,
                    message: "Failed To Authenticate",
                });
            }
            // console.log(decoded);
            req.user = {
                userName: decoded.userName,
                userEmail: decoded.userEmail,
                userPassword: decoded.userPassword,
                token: token,
            };
            return next();
        });
    } else {
        return res.status(400).json({
            isLoggedIn: false,
            message: "Incorrect Token Given",
        });
    }
}
