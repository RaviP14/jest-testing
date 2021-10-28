const capitalise = (string) => {
    const char0 = string.charAt(0).toUpperCase();
	const residual = string.slice(1).toLowerCase();
    const string1 = char0 + residual
    
    return string1
}

export default capitalise