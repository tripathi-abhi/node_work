const doWorkCallBack = (callBack) => {
	setTimeout(() => {
		// callBack("This is error", undefined);
		callBack(undefined, [1, 4, 7]);
	}, 2000);
};

doWorkCallBack((error, result) => {
	if (error) {
		return console.log(error);
	}
	console.log(result);
});
