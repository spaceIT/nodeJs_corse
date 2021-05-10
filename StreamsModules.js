const fs = require('fs');
const Transform = require('stream').Transform;
const Crypt_module = require('./CryptsModules');

const getReadableStream = (inputValue) => {
    if (inputValue === undefined) {
        process.stdin.setEncoding('utf8');

        return process.stdin.on('readable', () => {
            process.stdin.read();
        });
    }

    const urlPath = `./${inputValue}`;
    const readStream = fs.createReadStream(urlPath, 'utf8');

    readStream.on('error', () => {
        process.stderr.write('Input file does not exist');
        process.exit(1);
    });

    return readStream;
}

const getTransformStream = (shift, actionValue) =>
    new Transform({
        transform(chunk) {
            switch (actionValue) {
                case 'encode': this.push(Crypt_module.getCrypt(chunk, shift));
                    break;
                case 'decode': this.push(Crypt_module.getDecrypt(chunk, shift));
                    break;
                default: process.stderr.write(`(${actionValue}) is invalid action`)
            }
        }
    });

const getWritableStream = (outputValue) => {
    if (outputValue === undefined)
        return process.stdout;

    const path = __dirname + `/${outputValue}`;

    return fs.createWriteStream(path);
}

module.exports = { getReadableStream, getTransformStream, getWritableStream };
