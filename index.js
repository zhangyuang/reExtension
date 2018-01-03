const path = require('path')
const fs = require('fs')

class ReExtension {
    constructor () {}
    replace (dir, oldExtension, newExtension) {
        fs.readdir(dir, (err, files) => {
            if (err) throw err
            files.forEach((item, index) => {
                let filePath = path.join(dir, item)
                fs.stat(filePath, (err, stat) => {
                    if (err) throw err
                    if (stat.isDirectory()) {
                        //如果是目录，递归遍历
                        this.replace(filePath, oldExtension, newExtension)
                    } else {
                        //是文件
                        let re = new RegExp(oldExtension)
                        if (re.test(filePath)) {
                            const newFilePath = filePath.replace(re, newExtension)
                            fs.rename(filePath, newFilePath, (err) => {
                                if (err) throw err
                                console.log(`${ filePath } replace successed`)
                            })
                        }
                    }
                })
            })
        })
    }
}

module.exports = ReExtension
