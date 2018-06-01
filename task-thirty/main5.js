let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length - 1).clone(true)

$slides.append($firstCopy)
$slides.prepend($lastCopy)

$slides.css({
    transform: 'translateX(-400px)'
})

let current = 0
$buttons.eq(0).on('click', function () {
    if (current === 2) {
        console.log('说明你是从最后一张到第一张')
            $slides.css({transform:'translateX(-1600px)'})
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform:'translateX(-400px)'}).show()
            })
    } else {
        $slides.css({
            transform: 'translateX(-400px)'
        })
    }
    current = 0
})

$buttons.eq(1).on('click', function () {
    console.log(current)
    $slides.css({
        transform: 'translateX(-800px)'
    })
})

$buttons.eq(2).on('click', function () {
    if (current === 0){
        console.log('说明你是从第一张到最后一张')
    $slides.css({
        transform: 'translateX(0px)'
    }).one('transitionend',function(){
        $slides.hide().offset()
        $slides.css({transform:'translateX(-1200px)'}).show()
    })
}else{
    $slides.css({transform:'translateX(-1200px)'})
    current = 2
} 
})