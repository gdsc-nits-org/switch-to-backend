const getTime = (req, res, next) => {
    req.requestedTime = Date.now().toString();
    next();
}

export { getTime };
