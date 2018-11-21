var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var lineWidth = 3 

autoSetCanvasSize(canvas)

listenToUser(canvas)

var eraserEnabled = false
pen.onclick = function() {
  eraserEnabled = false
  pen.classList.add('active')
  eraser.classList.remove('active')
}

eraser.onclick = function() {
  eraserEnabled = true
  eraser.classList.add('active')
  pen.classList.remove('active')
}

black.onclick = function() {
  context.fillStyle = 'black'
  context.strokeStyle = 'black'
  black.classList.add('active')
  green.classList.remove('active')
  green.classList.remove('active')
  blue.classList.remove('active')
}

red.onclick = function() {
  context.fillStyle = 'red'
  context.strokeStyle = 'red'
  red.classList.add('active')
  black.classList.remove('active')
  green.classList.remove('active')
  blue.classList.remove('active')
}

green.onclick = function() {
  context.fillStyle = 'green'
  context.strokeStyle = 'green'
  green.classList.add('active')
  black.classList.remove('active')
  red.classList.remove('active')
  blue.classList.remove('active')
}
blue.onclick = function() {
  context.fillStyle = 'blue'
  context.strokeStyle = 'blue'
  blue.classList.add('active')
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
}
thin.onclick = function() {
  lineWidth = 1 
}
thick.onclick = function() {
  lineWidth = 10
}
clear.onclick = function() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

download.onclick = function() {
  var url = canvas.toDataURL('image/png')
  var a = document.createElement('a')
  console.log(a)
  // a.href = url
  a.setAttribute('href',url)
  // a.download = '我的画儿'
  a.setAttribute('download','picture')
  // a.target = '_blank'
  a.setAttribute('target','_blank')
  a.click()
}

/*********/
function autoSetCanvasSize(canvas) {
  setCanvasSize()

  window.onresize = function() {
    setCanvasSize()
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    canvas.width = pageWidth //设置的是属性值，不是样式
    canvas.height = pageHeight
  }
}

function listenToUser(canvas) {
  var using = false
  var lastPoint = {
      x: null,
      y: null 
    }
    // 特性检测
  if (document.body.ontouchstart !== undefined) {
    console.log(document.body.ontouchstart)
    // 触屏设备
    canvas.ontouchstart = function(aaa) {
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10) //正方形以左上角为坐标
      } else {
        lastPoint = {
          'x': x,
          'y': y
        }
      }
    }
    canvas.ontouchmove = function(aaa) {
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      var newPoint = {
        'x': x,
        'y': y
      }
      if (!using) {
        return
      }
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function() {
      using = false
    }
  } else {
    // 非触屏设备
    canvas.onmousedown = function(a) {
      var x = a.clientX
      var y = a.clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10) //正方形以左上角为坐标
      } else {
        lastPoint = {
          'x': x,
          'y': y
        }
      }

    }
    canvas.onmousemove = function(a) {
      var x = a.clientX
      var y = a.clientY
      var newPoint = {
        'x': x,
        'y': y
      }
      if (!using) {
        return
      }
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.onmouseup = function(a) {
      using = false
    }
  }


}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1); // 起点
  context.lineWidth = lineWidth;
  context.lineTo(x2, y2); // 终点
  context.stroke()
  context.closePath();
}

function drawCircle(x, y, radius) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2)
  context.fill()
}