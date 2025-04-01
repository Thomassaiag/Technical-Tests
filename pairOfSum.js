const findPairIndex = (array, target) => {
	const seen = new Set();
	const arrayLength = array.length;
	const finalList = [];
	for (let i = 0; i < arrayLength; i++) {
		let difference = target - array[i];

		if (seen.has(difference)) {
			finalList.push(array.indexOf(difference), array.indexOf(array[i]));
			return finalList;
		}
		seen.add(array[i]);
	}
	return null;
};

console.log(findPairIndex([1, 2, 3, 4, 5, 6], 11));
