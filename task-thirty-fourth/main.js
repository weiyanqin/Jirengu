myButton.addEventListener('click', function () { //创建一个请求
    let request = new XMLHttpRequest //声明一个对象，对象名字叫做 XMLHttpRequest

    request.onreadystatechange = () => {     //监听request的状态变化，一变化，就打印出来
        if(request.readyState === 4){
            console.log('请求响应都完毕了')

            if(request.status >= 200 && request.status < 300){
              console.log('说明请求成功')
              console.log(request.responseText)
              console.log(typeof request.responseText)
              let string = request.responseText

              let object = window.JSON.parse(string)   // 把符合JSON语法的字符串转换成JS对应的值

              console.log(typeof object)
              
              console.log(object)

              console.log('object.note')
              console.log(object.note)

              console.log('object.note.from')
              console.log(object.note.from)

            }else if(request.status >=400) {
                console.log('请求失败')

            }
        }
    }

    request.open('GET', 'http://jack.com:8002/xxx') // 配置request

    

    request.send() //请求发送
})