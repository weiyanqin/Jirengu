function Human(options){
    this.name = 'Frank',
    this.city = 'Hangzhou'
}
Human.prototype ={
    constructor:Human,
    species:function(){},
    walk:function(){},
    useTools:function(){}
}

var human = new Human({name:'Frank', city: 'Hangzhou'})