const colors = require('./colors');

const typeColors = {
    key: colors.FgWhite,
    string: colors.FgBlue,
    number: colors.FgGreen,
    boolean: colors.FgMagenta,
    null: colors.FgCyan
};

const syntaxHighlight = (json) => {
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let type = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                type = 'key';
            } else {
                type = 'string';
            }
        } else if (/true|false/.test(match)) {
            type = 'boolean';
        } else if (/null/.test(match)) {
            type = 'null';
        }
        return `${typeColors[type]}${match}${colors.reset}`;
    });
}

const prettyPrint = (object) => {
    return syntaxHighlight(JSON.stringify(object, null, 4));
};

module.exports = (input) => {
    try {
        if (input.constructor === String) {
            return prettyPrint(JSON.parse(input));
        } else {
            return prettyPrint(input);
        }
    } catch (error) {
        return input;
        throw new Error('Invalid input provided. Input must be a JSON string or object');
    }
};