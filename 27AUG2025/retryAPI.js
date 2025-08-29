const apiRetryFunc = (cb, maxRetries = 3, delayMS = 1000) => {
	return new Promise((resolve, reject) => {
		let retryCount = 0;

		const makeAPICall = () => {
			cb()
				.then((data) => {
					resolve({ data, retryCount });
				})
				.catch((err) => {
					retryCount++;
					if (retryCount <= maxRetries) {
						console.warn(
							`Failed to call API. Retrying: ${retryCount}/${maxRetries} in ${delayMS}ms.`
						);
						setTimeout(makeAPICall, delayMS);
					} else {
						reject(
							`Final error. Max retry (${maxRetries}) failed to call API.`
						);
					}
				});
		};
		makeAPICall();
	});
};

const randomNumGen = () => {
	return new Promise((resolve, reject) => {
		let randNum = Math.random();

		if (randNum > 0.6) {
			resolve(`Data: ${randNum.toFixed(2)} fetched successfully!!!`);
		} else {
			reject("data fetching failed!!!!");
		}
	});
};

apiRetryFunc(randomNumGen, 5, 1000)
	.then(({ data, retryCount }) => {
		console.log(
			`Data fetched: ${data}. Maximum number of retries took to achieve result: ${retryCount}`
		);
	})
	.catch((err) => {
		console.log(err);
	});
