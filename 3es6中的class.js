// 构造函数
function Person(){
    this.name = 'xiaoming'
    this.age = 18
    this.say = function () {
        console.log('person的say')
    }
}
let p1 = new Person()
console.log(p1.name)
p1.say()
// class 新es6语法 就是构造函数的另一种新写法 语法糖
class Person{
    constructor(){
        this.name = 'xiaoming'
        this.age = 18
    }
    say() {
        console.log('person的say')
    }
}

let p2 = new Person()
console.log(p2.name)
p2.say()

class Teacher extends Person{
    // 复杂写法
    // constructor(){
    //     //constructor 在this之前 一定要写super()
    //     super(); //调用 父亲的constructor
    //     this.name = 'xiaoling'
    //     this.score = 1000
    // }
    // 简单写法
    name="xiaoling"

    score=10000

    hello() {
                console.log('hello');
    }
    abc() {
                console.log('');
     }
}
let t1 = new Teacher()
console.log(t1.name)
t1.say()


