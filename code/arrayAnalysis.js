const analyse = (() => {

    function arrayProcess (array) {
        const length = array.length;
        
        const total = array.reduce((total, arg) => total + arg, 0);
        const average = Math.round((total / length) * 10)/10;

        const min = array.reduce((a, b) => a < b ? a : b);

        const max = array.reduce((a, b) => a > b ? a : b);

        const object1 = {
            average: average,
            min: min,
            max: max,
            length: length
        }
    
        return object1;
    }

    function arrayObject (array) {
        const answer = arrayProcess(array);

        return answer;
    }

    return {
        arrayObject,
    }
})();

export default analyse