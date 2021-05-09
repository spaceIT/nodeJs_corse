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
