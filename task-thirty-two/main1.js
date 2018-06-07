


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