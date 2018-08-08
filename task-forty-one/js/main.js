/*把code写到#code和style标签里*/
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = prefix + code.substring(0, n)
        styleTag.innerHTML = domCode.innerHTML
        domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css')
        domCode.scrollTop = 10000
        if (n >= result.length) {
            clearInterval(id)
            fn.call()
        }
    }, 10)
}
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = 10000
        if (n >= markdown.length) {
            clearInterval(id)
            fn.call()
        }
    }, 0)    
}

var result = `
/*
面试官你好 , 我是王海铭
我将以动画的形式来介绍我自己
只用文字介绍太单调了
我就用代码来介绍吧
首先准备一些样式
*/

*{
    transition: all 1s;
}
html{
    background: rgba(222,222,222);
    font-size: 16px;
}
#code{
    border: 1px solid red;
    padding: 16px;
} 

/*我们需要一点代码高亮*/

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD$A68;
}

/*加点3D效果*/
#code{
    transform: rotate(360deg)
}

/*不玩了 , 我来介绍下我自己吧*/
/*我需要一张白纸*/

#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: black;
    display: felx; 
    jusitfy-direction: center;
    align-items: center;
    padding: 16px;
}
#paper .content{
    background-color: white;
    height: 100%;
    width: 100%;
}
`
var result2 = `
#paper{
}
`
var md =`
# 标题
`
writeCode('', result, () => {
    createPaper(() => {
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

