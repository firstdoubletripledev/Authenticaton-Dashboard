import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user";
import config from "../config";

const signToken = (payload = {}, expiresIn = "20m") => {
    console.log("signToken");
    return jsonwebtoken.sign(payload, secretOrPrivateKey, { expiresIn: expiresIn });
}

export const signUp = async (req, res) => {
    console.log("signUp");
    const { userName, userEmail, userPassword } = req.body;
    const userAvatar = req.files;

    // validate
    if (!userName ||
        !userEmail ||
        !userPassword ||
        !userAvatar) {
        return res.status(400).json({
            message: "validation",
        });
    }

    try {
        const user = await User.findOne({ email: userEmail });
        if (user) {
            return res.status(400).json({
                message: "The email has already been taken",
            });
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(userPassword, salt);

            const suffixUrl = `/assets/avatars/${Date.now()}-${userAvatar.name}`
            const userAvatarPath = `${__dirname}/../../../${config.frontendDirName}/public${suffixUrl}`

            await userAvatar.mv(userAvatarPath);
            console.log(userAvatarPath);

            const newUser = new User({
                name: userName,
                email: userEmail,
                password: hashedPassword,
                avatar: userAvatarPath,
            });

            await newUser.save();

            console.log("typeof account", typeof account);
            const token = signToken(account);
            return res.status(201).json({
                account: newUser,
                token: token,
            });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
}

export const signIn = async (req, res) => {
    console.log("signIn", req.body);
    const { userEmail, userPassword } = req.body;

    // validate
    if (!userEmail ||
        !userPassword) {
        return res.status(400).json({
            message: "validation",
        });
    }

    try {
        const user = await User.findOne({ email: userEmail });
        if (user === null) {
            console.log("signin > Unregistered User");
            return res.status(400).json({
                message: "Unregistered User",
            });
        }

        const isEqual = bcrypt.compareSync(userPassword, user.password);

        if (isEqual === false) {
            console.log("signin > Incorrect Password");
            return res.status(400).json({
                message: "Incorrect Password",
            });
        }

        // delete user.userPassword;
        const token = signToken(user);
        return res.json({
            account: user,
            token: token,
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
}

export const getAccount = (req, res) => {
    return res.json({
        isLoggedIn: true,
        userName: req.user.userName,
        userEmail: req.user.userEmail,
        userPassword: req.user.userPassword,
        avatar: req.user.avatar,
    });
}