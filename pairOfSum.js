const findPairIndex = (array, target) => {
	const seen = new Set();
	const arrayLength = array.length;
	const finalList = [];
	for (let i = 0; i < arrayLength; i++) {
        //we check the difference for each table value
		let difference = target - array[i];
        // if the difference is part of the seen values, we have a matching sum and can return value indexes into an array
		if (seen.has(difference)) {
			finalList.push(array.indexOf(difference), array.indexOf(array[i]));
			return finalList;
		}
        // if not, we add the current value to the set. We'll check if this value is a difference on the next iteration
		seen.add(array[i]);
	}
    // if there's no matching pair, we return null
	return null;
};

console.log(findPairIndex([1, 2, 3, 4, 5, 6], 11));
