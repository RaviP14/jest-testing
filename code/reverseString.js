const reverseString = (string) => {
    const array = string.slice().split('');
    const array2 = [];
    
    array.forEach(element => {
        array2.unshift(element);
    });

    const string2 = array2.join('');
    
    return string2;
};

export default reverseString