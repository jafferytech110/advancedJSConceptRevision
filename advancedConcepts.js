// block scope
// function scope
// global scope

// nested function scopes
let a = 10
function outer () {
    let b = 20
    function inner() {
        let c = 30
        console.log(a,b,c)
    }
    inner()
}

outer()

//closure
function outer2() {
    let counter = 0
    function inner2() {
        counter++
        console.log(counter)
    }
    inner2()
}
outer2() //1
outer2() //1

//here is the closure 
function outer3() {
    let counter = 0
    function inner3() {
        counter++
        console.log(counter)
    }
    return inner3
}
const fn = outer3() //it stores reference of inner3() in fn constant
fn() //1
fn() //2
