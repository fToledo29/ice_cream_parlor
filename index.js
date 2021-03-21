function icecreamParlor(m, arr) {

	console.log('Input Array: ', arr);
    
	// Initialize output array
    let res = [];

	// We need to iterate through all the values in the given 
	// array to validate each value.
    arr.every((val, ind1) => { // O(n)
        
		// Each value needs to be compared by summing it to 
		// each other value in the same array.
        arr.every((innerVal, ind2) => { // O(n) which makes this function O(n^2)

			console.log(`Comparing outer value: ${val} with inner value ${innerVal}`);

			// Find the index that the sum between outer value a and 
			// inner value is = to given m
            if ((ind2 !== ind1) && (val + innerVal === m)) {

				console.log('Index found: ', ind1, ind2)

				// Add the found index to the output array (with the outer index)
                res = [ind1 + 1, ind2 + 1]; 
				return false;

            }
			return true;
        });

		// Returning false or true is just to break the loop.
		if (res.length > 0) {
            return false;
        } else {
            return true;
        }

    })
    
    return res;
}

const inputArr = [ 1, 4, 5, 3, 2 ];

const res = icecreamParlor(4, inputArr);

console.log(res)