// let attempt = 0;
// const newTask = () => new Promise((resolve, reject) => {
//   attempt++;
//   console.log(`attempt: ${attempt}`);

//   if (attempt < 3) {
//     reject("failed")
//   } else {
//     resolve("success");
//   }
// });

// function retryPromise(task, retries) {
//   return task().catch(err => {
//     if (retries > 0) {
//       console.log(`retrying... ${retries}`);

//       return retryPromise(task, retries - 1);
//     }

//     return Promise.reject(err);
//   });
// }

// retryPromise(newTask, 3)
//   .then((result) => {
//     console.log(result);

//   }).catch((err) => {
//     console.log(err);

//   });


let count = 0;
function freshTask() {
  return new Promise((resolve, reject) => {
    count++;
    console.log(count);
    
    setTimeout(() => {
      if (count < 3) {
        reject("failed")
      } else {
        resolve("success")
      }
    }, 2000);
  });
}

function retryPromise2(myTask, retry) {
  return myTask().catch((err) => {
    if (retry > 0) {
      console.log(`Retry: ${retry}`);
      
      return retryPromise2(myTask, retry - 1);
    }
    return Promise.reject(err)
  });
}

retryPromise2(freshTask, 3)
  .then((result) => {
    console.log(result);

  }).catch((err) => {
    console.log(err);

  });