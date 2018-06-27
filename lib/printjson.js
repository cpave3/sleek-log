const prettyPrint = (object) => {
    return JSON.stringify(object, null, 4);
};

module.exports = (input) => {
    try {
        if (input.constructor === String) {
            return prettyPrint(JSON.parse(input));
        } else {
            return prettyPrint(input);
        }
    } catch (error) {
        throw new Error('Invalid input provided. Input must be a JSON string or object');
    }
};