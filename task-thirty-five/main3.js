window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () {}
    nodes.html = function () {}
    return nodes
}

window.jQuery.ajax = function ({url,method,body,successFn,failFn,headers}) {
    let request = new XMLHttpRequest //声明一个对象，对象名字叫做 XMLHttpRequest
    request.open(method, url) // 配置request

    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)
    }

    request.onreadystatechange = () => { //监听request的状态变化，一变化，就打印出来
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body) //请求发送
}

window.$ = window.jQuery

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', function () { //创建一个请求
    window.jQuery.ajax({
        url: '/xxx',
        method: 'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'frank':'18'
        },
        successFn: (e) => {

        f1.call(undefined,e)
        f2.call(undefined,e)

        },
        failFn: (e) => {
            console.log(e)
        }
    })
})