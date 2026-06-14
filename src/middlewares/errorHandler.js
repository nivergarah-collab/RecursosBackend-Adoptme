export default function errorHandler(error, req, res, next) {
    res.status(500).send({
        status: "error",
        error: error.message || "Internal Server Error"
    });
}
