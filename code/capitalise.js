const capitalise = (string) => {
    const array = string.slice().split(' ');
    const array2 = [];

    array.forEach(element => {
        const char0 = element.charAt(0).toUpperCase();
	    const residual = element.slice(1).toLowerCase();
        const string1 = char0 + residual;
        array2.push(string1);
    });

    const string2 = array2.join(' ');

    return string2
}

export default capitalise