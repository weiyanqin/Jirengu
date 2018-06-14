myButton.addEventListener('click', function (e) { //创建一个请求
    $.ajax({
        url: '/xxx',
        method: 'post',
    }).then(
        (responseText) => {
            console.log(responseText)
            return responseText
        },
        (response) => {
            console.log('error1')
            return '已经处理'
        }
    ).then(
        (上一次处理结果) => {
            console.log(上一次处理结果)
        },
        (request) => {
            console.log(request)
        }
    )
})