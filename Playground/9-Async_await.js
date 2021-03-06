const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a < 0 || b < 0) {
				reject("Numbers should be positive");
			}
			resolve(a + b);
		}, 2000);
	});
};

const doWork = async () => {
	// return "Andrew";
	// throw new Error("Something went wrong");
	const sum = await add(1, 2);
	const sum2 = await add(sum, 5);
	const sum3 = await add(sum2, 5);
	return sum3;
};

doWork()
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
