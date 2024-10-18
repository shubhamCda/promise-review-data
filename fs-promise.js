import {copyFile, unlink} from "fs";

const delayTimeForCopy = (i) => {
    return new Promise((resolve, reject) => {
        copyFile("./countries.json",`data${i}.json`, (error) => {
            if(error) reject(error);
            else resolve();
        });
    })
}

const delayTimeForDelete = (i) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            unlink(`data${i}.json`, (error) => {
                if(error) reject(error);
                else resolve();
            });
        }, 1000);
    })
}

async function promises(){
    try{
        for(let i=1; i<=10; i++){
            await delayTimeForCopy(i);
        }
        for(let i=1; i<=10; i++){
            await delayTimeForDelete(i);
        }
    }
    catch(error){
        console.log(error);
    }
}

promises();