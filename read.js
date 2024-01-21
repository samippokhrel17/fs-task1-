// var fs = require('fs');

// function read (filename){
   

//     fs.readFile(filename,'utf8',function(err,data){
//         if(err){
//             console.log("error reading file",err);
//         }else{
//             console.log(`the text in ${filename} are =`, data)
//             const words = data.split(' ');
//             let counts = words.length;
//             console.log(`the total numbers of words in ${filename} =`, counts)
//         }
//     })
// }
// read('text1.txt')
// read('text2.txt')
// read('text3.txt')




const fs = require('fs');

function read(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading ${filename}`, err);
                reject(err);
            } else {
                console.log(`The text in ${filename} is:`, data);
                const words = data.split(/\s+/).filter(word => word.length > 0);
                const wordCount = words.length;
                console.log(`Total number of words in ${filename}:`, wordCount);
                resolve();
            }
        });
    });
}


read('text1.txt')
    .then(() => read('text2.txt'))
    .then(() => read('text3.txt'))
    



    