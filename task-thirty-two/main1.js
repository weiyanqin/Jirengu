$(clickMe).on('click', function () {
    $(popover).show()
    console.log(1)
    $(document).one('click', function () {
        $(popover).hide()
        console.log(1)
    })
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})