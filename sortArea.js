const FS = require('fs')
//读取文件，并且替换文件中指定的字符串
let replaceFile = function (filePath, sourceRegx, targetStr){
    FS.readFile(filePath, function (err, data){
        if(err){
            return err
        }
        let str = data.toString()
        str = str.replace(sourceRegx, targetStr)
        FS.writeFile(filePath, str, function (err) {
            if (err) return err
        })
    })
}
//遍历statics文件夹，找到main_*.js
FS.readdir('./statics', function (err, files){
    if(err){
        return err
    }
    if(files.length !=0){
        files.forEach((item)=>{
            let path = './statics/'+item
            //判断文件的状态，用于区分文件名/文件夹
            FS.stat(path, function (err, status){
                if(err){
                    return err
                }
                let isFile = status.isFile()//是文件
                let isDir = status.isDirectory()//是文件夹
                if(isFile){
                    if(item.match(new RegExp('^main.*$'))){
                        replaceFile(path, /console\.log\(\"0function0\"\)/g, 'zyk')
                    }
                }
                if(isDir){
                    console.log('文件夹：'+item)
                }
            })
        })
    }
})