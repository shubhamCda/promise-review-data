import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import data from './data.json' with {type: "json"};

const filePath = fileURLToPath(import.meta.url);
const dirname = path.dirname(filePath);
const dirPath = path.join(dirname, 'TestDir');

function createDir() {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        }
    })
}
createDir();

function createFiles(filePath, data, cb) {
    setTimeout(() => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) {
                cb(err);
            }
            else {
                cb(null, `${filePath} created`);
            }
        })
    }, 1000);
}

function deleteFiles(filePath, delay, cb) {

    setTimeout(() => {
        fs.unlink(filePath, (err) => {
            if (err) {
                cb(err);
            }
            else {
                cb(null, `${filePath} deleted`);
            }
        })
    },delay * 1000);
}

function runAll() {
    for (let i = 1; i <= 10; i++) {
        const filePath = path.join(dirPath, `file${i}.json`);
        createFiles(filePath, data, (err, msg) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(msg);
            }
        });
    }

    for (let i = 1; i <= 10; i++) {
        const filePath = path.join(dirPath, `file${i}.json`);
        deleteFiles(filePath, i+1, (err, msg) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(msg);
            }
        });
    }
}
runAll();