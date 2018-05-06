
    var yyy = document.getElementById('xxx');
    var context = yyy.getContext('2d');
    var lineWidth = 5

    autoSetCanvasSize(yyy)

    listenToUser(yyy)

    var eraserEnabled = false
    pencil.onclick = function () {
        eraserEnabled = false
        pencil.classList.add('active')
        eraser.classList.remove('active')
    }
    eraser.onclick = function () {
        eraserEnabled = true
        eraser.classList.add('active')
        pencil.classList.remove('active')
    }
    clear.onclick = function () {
        context.clearRect(0, 0, yyy.width, yyy.height);
    }
    download.onclick = function () {
        var url = yyy.toDataURL("image/png")
        console.log(url)
        var a = document.createElement('a')
        document.body.appendChild(a)
        a.href = url
        a.download = 'my picture'
        a.targer = '_blank'
        a.click()
    }


    red.onclick = function () {
        context.strokeStyle = 'red'
        context.fillStyle = 'red'
        red.classList.add('active')
        green.classList.remove('active')
        blue.classList.remove('active')
    }
    green.onclick = function () {
        context.strokeStyle = 'green'
        context.fillStyle = 'green'
        green.classList.add('active')
        red.classList.remove('active')
        blue.classList.remove('active')
    }
    blue.onclick = function () {
        context.strokeStyle = 'blue'
        context.fillStyle = 'blue'
        blue.classList.add('active')
        red.classList.remove('active')
        green.classList.remove('active')
    }

    thin.onclick = function () {
        lineWidth = 5
    }
    thick.onclick = function () {
        lineWidth = 10
    }

    /****************************************************/
    function autoSetCanvasSize(canvas) {
        setCanvasSize()

        window.onresize = function () {
            setCanvasSize()
        }

        function setCanvasSize() {
            var pageWidth = document.documentElement.clientWidth //页面的宽度
            var pageHeight = document.documentElement.clientHeight //页面的高度

            canvas.width = pageWidth
            canvas.height = pageHeight //设置的属性值，不是样式
        }
    }

    function drawCircle(x, y, radius) {
        context.beginPath();
        // context.fillStyle = 'black'
        context.arc(x, y, radius, 0, Math.PI * 2);
        // context.stroke()
        context.fill();
    }

    function drawLine(x1, y1, x2, y2) {
        // var context = xxx.getContext('2d')
        context.beginPath();
        // context.strokeStyle = 'black';
        context.moveTo(x1, y1); //起点
        context.lineWidth = lineWidth;
        context.lineTo(x2, y2); //终点
        context.stroke();
        context.closePath();
    }

    function listenToUser(canvas) {
        var using = false
        var lastPoint = {
            x: undefined,
            y: undefined
        }
        if (document.body.ontouchstart !== undefined) { //特性检测，不针对哪个设备，只想知道时候支持touchstart
            //触屏设备 
            canvas.ontouchstart = function (aaa) {
                console.log('开始摸我了')
                var x = aaa.touches[0].clientX; //坐标是相对与视口的坐标
                var y = aaa.touches[0].clientY; //坐标是相对与视口的坐标
                console.log(x, y)
                using = true
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    lastPoint = {
                        "x": x,
                        "y": y
                    }
                }
            }
            canvas.ontouchmove = function (aaa) {
                console.log('边摸边动')
                var x = aaa.touches[0].clientX
                var y = aaa.touches[0].clientY
                // console.log(x,y)
                if (!using) {
                    return
                }

                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    var newPoint = {
                        "x": x,
                        "y": y
                    }
                    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
                    lastPoint = newPoint;
                }
            }
            canvas.ontouchend = function () {
                console.log('摸完了')
                using = false
            }
        } else {
            //非触屏设备
            canvas.onmousedown = function (aaa) {
                var x = aaa.clientX; //坐标是相对与视口的坐标
                var y = aaa.clientY; //坐标是相对与视口的坐标
                using = true

                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    lastPoint = {
                        "x": x,
                        "y": y
                    }
                }
            }
            canvas.onmousemove = function (aaa) {
                var x = aaa.clientX
                var y = aaa.clientY

                if (!using) {
                    return
                }

                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                } else {
                    var newPoint = {
                        "x": x,
                        "y": y
                    }
                    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
                    lastPoint = newPoint;
                }
            }
            canvas.onmouseup = function (aaa) {
                using = false
            }
        }
    }