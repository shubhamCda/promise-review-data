let count = 0;

function resPromise(params) {
  return new Promise((resolve, reject) => {
    count++;
    setTimeout(() => {
      if (count < 3) {
        reject("failed");
      } else {
        resolve("success");
      }
    }, 2000);
  });
}

function retrying(func, retries) {
  return func().catch((err) => {
    if (retries > 0) {
      return retrying(func, retries - 1)
    }
    return Promise.reject(err);
  });
}

retrying(resPromise, 3)
  .then((result) => {
    console.log(result);
      
  }).catch((err) => {
    console.log(result);
    
  });