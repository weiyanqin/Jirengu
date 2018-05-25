$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')

setTimeout(() => {
    $('.images > img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend', (e) => {
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images > img:nth-child(2)').removeClass('enter').addClass('current')

}, 3000)

