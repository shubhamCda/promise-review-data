// Question: Write a function retryPromise that retries a given asynchronous task N times if it fails.


function retryPromise(task, retries) {
  return task().catch(err => {
    if (retries > 0) return retryPromise(task, retries - 1);
    return Promise.reject(err);
  });
}

// Example usage
let attempt = 0;
const task = () => new Promise((resolve, reject) => {
  attempt++;
  if (attempt < 3) reject('Failed');
  else resolve('Success');
});

// retryPromise(task, 3).then(console.log).catch(console.error);

// Question: Write a function retryPromise that retries a given asynchronous task N times if it fails.

function randomNum(){
  return new Promise((resolve , reject) => {
      setTimeout(() => {
          const num = Math.floor(Math.random()*5);
          if(num === 3){
              resolve(num);
          }
          reject(num);
      } , 2000);
  })
}

function trying(retry){
  if(retry < 0){
      console.log("All retries over");
  }
  else{
      randomNum()
      .then((res) => {
          console.log(res);
      })
      .catch((num) => {
          console.log(num, `${retry} left , retrying in 2s`);
          trying(retry-1);
      })
  }
}

trying(3);