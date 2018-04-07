var fs = require('fs')

var dirName = process.argv[2]


fs.access("dirName",(err) =>{
    if(err.code == "ENOENT"){
        fs.mkdirSync("./" + dirName) // mkdir $1
        process.chdir("./" + dirName) // cd $1
        fs.mkdirSync('css') // mkdir css
        fs.mkdirSync('js') // mkdir js
       
        fs.writeFileSync("./index.html", "")
        fs.writeFileSync("css/style.css", "")
        fs.writeFileSync("./js/main.js", "")   
    }
    else{
        console.log("the dir has exisited")
    }
}
    
)