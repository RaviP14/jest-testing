const caeser = (() => {
    function cipher(string, key) {
        const value = encrypt(string, key);

        return value;
    }

    function encrypt(string, key) {
        const array = string.slice().toLowerCase().split('');
        const cipherArray = [];

        array.forEach(element => {
            if ((element.charCodeAt(0) >= 97) && (element.charCodeAt(0) <= 122) && (key >= 0 && key <= 25)) {
                const value = element.charCodeAt(0) - 97;
                
                const val2 = 97 + value + key;
                // If val2 is > (z).
                if (val2 > 122) {
                    // To get back to (a).
                    const val3 = val2 - 123 + 97;
                    const cipherValue = String.fromCharCode(val3);
                    cipherArray.push(cipherValue);
                } else {
                    const cipherValue = String.fromCharCode(val2);
                    cipherArray.push(cipherValue);
                }
                
            } else if ((key >= 0 && key <= 25)){
                cipherArray.push(element);
            }
        });
        
        const cipherString = cipherArray.join('');

        return cipherString;
    }

    // Decipher fuction?

    return {
        cipher,
    }
})();

export default caeser