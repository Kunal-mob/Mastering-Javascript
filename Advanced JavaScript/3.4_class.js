//easy way of using class in js

class animal{
    constructor(name) {
        this.name=name
    }
    great(){
        console.log(this.name+" makes a noise");
        
    }
}
class dog extends animal{
    great(){
        console.log(this.name+" barks");
        
    }
}

const dog1 = new dog("tomy")
dog1.great()