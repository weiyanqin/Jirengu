var links = [
    {
        q:'qq.com',
        w:'weibo.com',
        e:'ele.me',
        r:'renren.com',
        t:'twitter.com',
        y:'youtube.com',
        u:'ubuntu.com',
        i:'iciba.com',
        o:'office.com',
        p:'processon.com'
    },
    {
        a:'alipay.com',
        s:'shadowsocks.org',
        d:'deepin.org',
        f:'facebook.com',
        g:'github.com',
        h:'hackerrank.com',
        j:'jirengu.com',
        k:'kugou.com',
        l:'leetcode.com'
    },
    {
        z:'zybuluo.com',
        x:'xunlei.com',
        c:'ctrip.com',
        v:'vip.com',
        b:'baidu.com',
        n:'nodejs.org',
        m:'material-ui.com'
    }
];

var rows_keys = new Array()
var rows_values = new Array()
for (var i = 0; i < links.length; i++) {
    rows_keys[i] = Object.keys(links[i]);
    rows_values[i] = Object.values(links[i]);
}

createSearchBar()
createInputEvent()
createSearchEvent()
for (var i = 0; i < 3; i++) {
    createKeyBoard(rows_keys[i],rows_values[i])
};
xxx()
addKeyPressEvent()
createDescription()
copyRight()
function createSearchBar(){
    var body = document.querySelector("body")
    var form = document.createElement("form")
    var input = document.createElement("input")
    var baidu = document.createElement("a")
    var google = document.createElement("a")
    input.setAttribute("type","text")
    input.setAttribute("spellcheck","false")
    input.setAttribute("placeholder","Search")
    baidu.setAttribute("class","baidu")
    google.setAttribute("class","google")
    baidu.innerText = "百度"
    google.textContent = "谷歌"
    body.appendChild(form)
    form.appendChild(input)
    form.appendChild(baidu)
    form.appendChild(google)
}
function createInputEvent(){
    var body = document.querySelector("body");
    var input = document.querySelector("input");
    body.onclick = function (evt){
        evt.target.localName === "input" ? input.setAttribute("autofocus","autofocus"): input.removeAttribute("autofocus");
    }
}
function createSearchEvent(){
    var search_buttons = document.querySelectorAll("a");
    for (var i = 0; i < search_buttons.length; i++) {
        search_buttons[i].onclick = function (evt){
            var question = document.querySelector("input").value;
            if (question) {
                switch(evt.target.className) {
                    case "baidu": window.open("https://www.baidu.com/s?wd=" + question); break;
                    case "google": window.open("https://www.google.com/search?q=" + question); break;
                }
            } else {
                alert("你好像需要输入点什么～");
            }
        }
    }
}
function createKeyBoard(arr1,arr2){
    var body = document.querySelector("body");
    var div = document.createElement('div');
    body.appendChild(div);
    for (let i = 0; i < arr1.length; i++) {
        var kbd = document.createElement('kbd');
        var img = document.createElement('img')
        kbd.setAttribute("title", arr2[i]);
        kbd.textContent = arr1[i];
        // img.setAttribute('src',"https://" + kbd.title + "/favicon.ico")
        div.appendChild(kbd);
        kbd.appendChild(img)
        kbd.onclick = function (evt){
            window.open("//" + evt.target.getAttribute("title"),"_blank");
        };
    }
}
function xxx(){
    var svg = document.querySelectorAll('svg')
    console.log(svg)
}
function addKeyPressEvent(){
    window.onkeydown = function(evt){
        var input = document.querySelector("input");
        if (!input.getAttribute("autofocus")){
            evt.preventDefault();
            if (evt.ctrlKey) {
                switch(evt.code){
                    case "KeyE": editKeyBoard(); break;
                    case "KeyD": deleteKeyBoard(); break;
                };
            } else {
                if (!evt.altKey) {
                    var kbds = document.querySelectorAll("kbd");
                    for (var i = 0; i < kbds.length; i++) {
                        if (evt.code.lastIndexOf(kbds[i].innerText) === 3) {
                            console.log(evt.code)
                            window.open("//" + kbds[i].getAttribute("title"),"_blank");
                        }
                    }
                }
            }
        }
    }
}
function editKeyBoard(){
    var letter = prompt("你想修改哪个字母的导航？");
    var user_link = prompt("新的导航地址为？ （PS：需要填写完整的域名哦！）");
    if (letter && user_link) {
        var letter_uppercase = letter.toUpperCase();
        var result = letter_uppercase.match(/[a-zA-Z]/g);
        if (result && result.length == 1) {
            alert("修改成功！");
            var kbds = document.querySelectorAll("kbd");
            for (var i = 0; i < kbds.length; i++) {
                if (kbds[i].innerText == letter_uppercase) {
                    kbds[i].setAttribute("title", user_link);
                }
            }
        } else {
            alert("请输入有效的单个字母或导航地址！");
        }
    } else {
        alert("字母和导航地址都填上才可以哦！");
    }
}
function deleteKeyBoard(){
    var letter = prompt("你想重置哪个字母的导航？");
    if (letter) {
        var result = letter.match(/[a-zA-Z]/g);
        console.log(result)
        if ( letter && result && result.length === 1) {
            alert("重置成功！");
            var letter_uppercase = letter.toUpperCase();
            for (let i = 0; i < rows_keys.length; i++) {
                for (let j = 0; j < rows_keys[i].length; j++) {
                    if (rows_keys[i][j].toUpperCase() == letter_uppercase) {
                        var kbds = document.querySelectorAll("kbd");
                        for (var k = 0; k < kbds.length; k++) {
                            if (kbds[k].innerText == letter_uppercase) {
                                kbds[k].setAttribute("title", rows_values[i][j]);
                            }
                        }
                    }
                }
            }
        } else {
            alert("请输入单个有效的字母！");
        }
    } else {
        alert("填上字母才可以哦！");
    }
}
function createDescription(){
    var body = document.querySelector("body");
    var p = document.createElement("p");
    p.setAttribute("class","description");
    p.innerHTML = "<span>使用说明</span>:<br>1. <span>Ctrl + E</span> 可自定义与字母关联的导航地址<br>2. <span>Ctrl + D</span> 可重置与字母关联的导航地址<br>3. 修改时字母和导航地址对 <span>大小写不敏感</span><br>4. 字母相关的导航地址可将鼠标悬浮其上查看 "
    body.appendChild(p);
}
function copyRight(){
    var body = document.querySelector("body");
    var p = document.createElement("p");
    p.setAttribute("class","copyright");
    p.innerHTML = "Copyright&nbsp;&copy;&nbsp;2017-2018&nbsp;王海铭&nbsp版权所有";
    body.appendChild(p);
}