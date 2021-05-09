const fs = require('fs');

const Crypt_module = require('./Crypt_module');

const getReadableStream = (inputValue) => {
    const urlPath = `./${inputValue}`;
    const readStream = fs.createReadStream(urlPath, 'utf8');

    return readStream;
}
