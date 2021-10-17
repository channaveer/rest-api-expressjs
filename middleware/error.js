module.exports = (request, response) => {
    response.status(404).send({
        status: "error",
        message: "Oops! Looks like your wandering in the bushes.",
    });
};
