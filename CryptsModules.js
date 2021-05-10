const Crypt_module = (() => {
    const alfabet = [...'abcdefghijklmnopqrstuvwxyz'];

    const crypt = {
        getCrypt: (data, shift) =>
        ([...data.toString()].reduce((acc, item) => {
            const indexLetter = alfabet.findIndex(letter => letter === item);
            const shiftIndexLetter = indexLetter + Number(shift);

            if (indexLetter !== -1)
                switch (true) {
                    case shiftIndexLetter >= alfabet.length: acc += alfabet[shiftIndexLetter - alfabet.length];
                        break;
                    case shiftIndexLetter < 0: acc += alfabet[shiftIndexLetter + alfabet.length];
                        break;
                    default: acc += alfabet[shiftIndexLetter]
                }
            else
                acc += item;

            return acc;
        }, '')),
        getDecrypt: (data, shift) =>
        ([...data.toString()].reduce((acc, item) => {
            const indexLetter = alfabet.findIndex(letter => letter === item);
            const shiftIndexLetter = indexLetter - Number(shift);

            if (indexLetter !== -1)
                switch (true) {
                    case shiftIndexLetter >= alfabet.length: acc += alfabet[shiftIndexLetter - alfabet.length];
                        break;
                    case shiftIndexLetter < 0: acc += alfabet[shiftIndexLetter + alfabet.length];
                        break;
                    default: acc += alfabet[shiftIndexLetter]
                }
            else
                acc += item;

            return acc;
        }, '')),
    }

    return crypt;
})();

module.exports = Crypt_module;
