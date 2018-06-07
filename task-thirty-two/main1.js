// $(clickMe).on('click', function () {
//     $(popover).show()
//     console.log(1)
//     setTimeout(function () {
//         $(clickMe).one('click', function () {
//             $(popover).hide()
//             console.log(2)
//         })
//     }, 0)
// })

var n = 0

$(clickMe).on('click', function () {
    n += 1
    $(popover).show()
    setTimeout(function () {
        $(document).on('click', function () {
            $(popover).hide()
            n = 0
        })
    },0)

    $(wrapper).on('click',function(e){
        e.stopPropagation()
    })
    if (n % 2 === 0) {
        $(popover).hide()
    }
})