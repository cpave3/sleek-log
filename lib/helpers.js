const path = require('path')
    , fs   = require('fs');

methods = {
    mkdirp: (targetPath) => {
        // We are provided with a path which needs to be created, mkdir -p style
        targetPath
            .split(path.sep)
            .reduce((currentPath, dir) => {
                // We get an array of each dir on the path, and synchronously
                // make them if they don't already exist
                currentPath += dir + path.sep;
                if (!fs.existsSync(currentPath)){
                    fs.mkdirSync(currentPath);
                }
                return currentPath;
            }, '');
    },
    initialiseLog: (targetFile) => {
        try {
            if (!targetFile) {
                throw new Error('targetFile cannot be null or undefined');
            }
            const parts = targetFile.split(path.sep);
            const filename = parts.pop();
            if (!fs.existsSync(path.join(...parts))) {
                methods.mkdirp(path.join(...parts));
            }
    
            // Check if the file exists
            if (!fs.existsSync(targetFile)) {
                // Need to make a new log file
                fs.writeFileSync(targetFile, '');
            } 
            return true;
        } catch (error) {
            return false;
        }
    },
    extractArguments: (args) => {
        const output = [];
        for (let i = 1; i < args.length; i++) {
            output[i-1] = args[i];
        }
        return output;
    }
};

module.exports = methods;