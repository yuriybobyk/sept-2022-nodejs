const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join('mainFolder'), err => {
//     if (err) throw new Error(err.message)
// })

//
// fs.mkdir(path.join('mainFolder', 'folder1'), err => {
//     if (err) throw new Error(err.message);
// })
//
// fs.mkdir(path.join('mainFolder', 'folder2'), err => {
//     if (err) throw new Error(err.message);
// })
//
// fs.mkdir(path.join('mainFolder'), err => {
//     if (err) throw new Error(err.message);
// })
//
// fs.mkdir(path.join('mainFolder', 'folder3'), err => {
//     if (err) throw new Error(err.message);
// })
//
// fs.mkdir(path.join('mainFolder', 'folder4'), err => {
//     if (err) throw new Error(err.message);
// })
//
// fs.mkdir(path.join('mainFolder', 'folder5'), err => {
//     if (err) throw new Error(err.message);
// })
//
// fs.writeFile(path.join('mainFolder', 'file1.js'), 'File1', (err)=>{
//     if (err) throw new Error(err.message)
// })
//
// fs.writeFile(path.join('mainFolder', 'file2.js'), 'File2', (err)=>{
//     if (err) throw new Error(err.message)
// })
//
// fs.writeFile(path.join('mainFolder', 'file3.js'), 'File3', (err)=>{
//     if (err) throw new Error(err.message)
// })
//
// fs.writeFile(path.join('mainFolder', 'file4.js'), 'File4', (err)=>{
//     if (err) throw new Error(err.message)
// })
//
// fs.writeFile(path.join('mainFolder', 'file5.js'), 'File5', (err)=>{
//     if (err) throw new Error(err.message)
// })

// fs.readdir(path.join('mainFolder'), {withFileTypes:true},(err,data)=>{
//     if (err) throw new Error(err.message);
//     console.log(data);
//     data.forEach(file=>{
//         console.log(file.isFile());
//     })
// })


fs.readdir(path.join('mainFolder'), {withFileTypes: true}, (err, files) => {
    if (err) throw new Error(err.message)

    files.forEach(file => {
        if (file.isFile()) {
            console.log(`FILE : ${file.name}`)
        }else {
            console.log(`FOLDER : ${file.name}`)
        }
    });

});




