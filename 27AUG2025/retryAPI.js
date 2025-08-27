const retryAPI = (cb, maxRetries = 3, delayMS = 1000) => {
  return new Promise((resolve, reject) => {
    let retryCount = 0;

    const apiCallFn = () => {
      cb()
        .then((data) => {
          resolve({ data, retries });
        }).catch((err) => {
          retryCount++;
          if (retryCount <= maxRetries) {
            console.error(`API call failed. Retrying(${retryCount}/${maxRetries})....in ${delayMS}ms.`);
            setTimeout(cb, timeout);
            
          } else {
            console.error(`Final error. Retry(${retryCount}/${maxRetries}). API call STOP XXXXXXXX`);
            
          }
        });
    }
  })
}