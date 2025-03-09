function func1(){
console.log(this)//Global scope
}
"use strict"
function func2(){
    console.log(this)//undefined
}