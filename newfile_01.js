function greet(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("Name is not available")
    }else{

      setTimeout(() => {
        resolve(`${name}`);
      }, 2000);
    }
  })
}

function greet2(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("Name is not available")
    }else{

      setTimeout(() => {        
        resolve(`${name}`);
      }, 5000);
    }
  })
}

const arr = [];

greet2("Shubham")
  .then((result) => {
      return greet(" Bodalkar").then((lastname) =>{
        return result + lastname       
        
      })
  })
  .then((newname) =>{
    console.log(`${newname}`);
    
  })
  .catch((err) => {
    
});



// greet("")
//   .then((result) => {
//     console.log(result);

//   }).catch((err) => {
//     console.log(err);

//   });

// function main(){
//   let allProm = [];

//   allProm.push(greet("Shubham"));
//   allProm.push(greet2("Bodalkar"));

//   const result = resAllPromise(allProm)
// }

// function resAllPromise(promises) {
//   return new Promise((resolve, reject) => {
//     let res = [];
//     let count = 0 

//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then((str) =>{

//         })
      
//     }
//   })
// }







//reverse a string with recursion
// function reversal(str) {
//   if (str == "") {
//     return str;
//   }
//     return reversal(str.substr(1)) + str[0];
    
// }
  


// console.log(reversal("Hello"));