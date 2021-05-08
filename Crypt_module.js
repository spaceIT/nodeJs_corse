const Crypt_module = (() => {
    const alfabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const crypt = {
        getCrypt(data, shift) {
            const arrayData = data.split('');

            const rezult = arrayData.reduce((acc, item) => {
                let indexLetter = (alfabet.findIndex((letter) => letter === item));

                indexLetterS = shift > 0 ? indexLetter : indexLetter + alfabet.length

                acc += alfabet[indexLetterS + shift];

                return acc;
            }, '')

            return rezult;
        },
        getDecrypt(data, shift) {
            const arrayData = data.split('');

            const rezult = arrayData.reduce((acc, item) => {
                let indexLetter = alfabet.findIndex((letter) => letter === item);

                indexLetterS = shift > 0 ? indexLetter : indexLetter - alfabet.length

                acc += alfabet[indexLetterS - shift];

                return acc;
            }, '')

            return rezult;
        },
    }

    return crypt;
})();
