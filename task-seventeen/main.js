var keys = {
    '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
    '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
    '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
    'length': 3,
}
var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'youtube.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': 'undefined',
    'a': 'acfun.com',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'www.mcdonalds.com.cn'
}
var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if (hashInlocalStorage) {
    hash = hashInlocalStorage
}
index = 0
while (index < keys['length']) {
    div = document.createElement('div') //生成一个标签
    div.className = 'row' //给这个标签一个属性
    main.appendChild(div) //把这个标签作为谁的儿子
    row = keys[index]
    index2 = 0
    while (index2 < row['length']) {
        kbd = document.createElement('kbd')
        span = document.createElement('span')
        span.textContent = row[index2]
        span.className = 'text'
        kbd.appendChild(span)
        kbd.className = 'key'
        button = document.createElement('button')
        button.textContent = '编辑'
        button.id = row[index2]
        img = document.createElement('img')
        if (hash[row[index2]]) {
            img.src = 'http://' + hash[row[index2]] + '/favicon.ico'
        } else {
            img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        img.onerror = function (xxx) {
            // console.log('下载失败')
            // console.log(xxx)
            xxx.target.src = ''
        }
        button.onclick = function (xzkjcnxlkcjlk) {
            button2 = xzkjcnxlkcjlk.target
            img2 = (button2.previousSibling)
            key = button2.id
            x = prompt('给我一个网址')
            hash[key] = x
            img2.src = 'http://' + x + '/favicon.ico'
            img2.onerror = function (xxx) {
                xxx.target.src = '//i.loli.net/201711105a.5afbc5e183.png'
            } //hash变更
            localStorage.setItem('zzz', JSON.stringify(hash))
            console.log(hash)
        }
        kbd.appendChild(img)
        kbd.appendChild(button)
        div.appendChild(kbd)
        index2 = index2 + 1
    }
    index = index + 1

    document.onkeypress = function (xzkjcnxlkcjlk) {
        key = xzkjcnxlkcjlk['key']
        website = hash[key]
        console.log(website)
        window.open('http://' + website, '_blank')
    }
}