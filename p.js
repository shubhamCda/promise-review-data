let first=new Promise((resolve)=>{
  setTimeout(() => {
    resolve("shubham");
  },2000);
})
let last=new Promise((resolve)=>{
  setTimeout(() => {
    resolve("shubham");
  },10000);
})
let result = first.then((first)=>{
  return last.then((last)=>{
    console.log(`${first}${last}`)
  })
})
