const fs = require('fs');

const Crypt_module = require('./Crypt_module');

const getReadableStream = (inputValue) => {
    if (inputValue === undefined) {
        process.stdin.setEncoding('utf8');

        return process.stdin.on('readable', () => {
            process.stdin.read();
        });
    }

    const urlPath = `./${inputValue}`;
    const readStream = fs.createReadStream(urlPath, 'utf8');

    return readStream;
}

const getTransformStream = (shift, actionValue) =>
    new Transform({
        transform(chunk) {
            switch (actionValue) {
                case 'crypt': this.push(Crypt_module.getCrypt(chunk, shift));
                    break;
                case 'decrypt': this.push(Crypt_module.getDecrypt(chunk, shift));
                    break;
                default: console.log(`(${actionValue}) no such module exists`)
            }
        }
    });

module.exports = { getReadableStream, getTransformStream };

