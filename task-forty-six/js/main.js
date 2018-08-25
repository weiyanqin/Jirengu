console.log(1)

axios.interceptors.response.use((response) => {
    let config = response.config
    let { method, url, data } = config
    if (url === '/books/1' && method === 'get') {
        response.data = {
            'name': 'frank'
        }
    }

    return response
})

axios.get('/books/1').then((response) => {
    console.log(response)
})



$('#addOne').on('click', () => {
    let oldNumber = $('#number').text()
    let newNumber = oldNumber - 0 + 1
    $('#number').text(newNumber)
})

$('#substractOne').on('click', () => {
    let oldNumber = $('#number').text()
    let newNumber = oldNumber - 0 - 1
    $('#number').text(newNumber)
})

$('#reset').on('click', () => {
    $('#number').text(0)
})