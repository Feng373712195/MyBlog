var fs = require('fs');

const emptyDir = function(fileUrl){
    let files = fs.readdirSync(fileUrl);//读取该文件夹
    files.forEach(function(file){
        var stats = fs.statSync(fileUrl+'/'+file);
        if(stats.isDirectory()){
            emptyDir(fileUrl+'/'+file);
        }else{
            fs.unlinkSync(fileUrl+'/'+file);
            console.log("删除文件"+fileUrl+'/'+file+"成功");
        }
    });
}
//删除所有的空文件夹
const rmEmptyDir = function(fileUrl){
    let files = fs.readdirSync(fileUrl);
    if(files.length>0){
        var tempFile = 0;
        files.forEach(function(fileName)
        {
            tempFile++;
            rmEmptyDir(fileUrl+'/'+fileName);
        });
        if(tempFile==files.length){//删除母文件夹下的所有字空文件夹后，将母文件夹也删除
            fs.rmdirSync(fileUrl);
            console.log('删除空文件夹'+fileUrl+'成功');
        }
    }else{
        fs.rmdirSync(fileUrl);
        console.log('删除空文件夹'+fileUrl+'成功');
    }
}

module.exports = {
    emptyDir,
    rmEmptyDir
}