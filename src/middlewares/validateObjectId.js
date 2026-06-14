import mongoose from 'mongoose';

export default function validateObjectId(paramName) {
    return function objectIdValidator(req, res, next) {
        const value = req.params[paramName];

        if (!mongoose.isValidObjectId(value)) {
            return res.status(400).send({
                status: "error",
                error: `Invalid ${paramName}`
            });
        }

        next();
    };
}
