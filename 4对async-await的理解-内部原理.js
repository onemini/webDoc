//1 同步 代码从上往下执行 遇见 同步 就会一直等 等到完成 才会继续走
//   异步 代码从上往下执行 遇见 异步 就先走了 异步代码后面执行
//2 说ajax 问个问题
// 那些是异步 1 定时器 2 ajax 3 事件处理(绑定的onclick等) 4 nodejs 读取文件也有异步
console.log(1);
$.ajax({
    url: "./php/ok.php",
    success: function (res) {
        console.log(2);
    }
})
console.log(3);

// 结果：1 3 2

//常见问题: 要求第一个ajax 成功之后 在第二个发送ajax 再来第三个。。。
//这样写 不一定谁先谁后
//如果一直嵌套就是 地狱问题
$.ajax({
    url: "./php/ok.php",
    success: function (res) {
        console.log('结果1', res);
        $.ajax({
            url: "./php/ok.php",
            success: function (res) {
                console.log('结果2', res);
                $.ajax({
                    url: "./php/ok.php",
                    success: function (res) {
                        console.log('结果3', res);
                        $.ajax({
                            url: "./php/ok.php",
                            success: function (res) {
                                console.log('结果4', res);
                            }
                        })
                    }
                })
            }
        })
    }
})

// 可以使用promise解决地狱回调
// Promise
let p1=new Promise(function (resolve, reject) {
    // resolve 是成功
    // reject 是失败
})
// p1 是new的promise实例 他有固定的写法
// p1.then(成功的函数resolve, 失败的函数reject)
// p1.then(function(){}, function(){})
let p1=new Promise(function (resolve, reject) {
    // let p1=new Promise(function (resolve, reject) {
    //     console.log('成功',data);
    // })
    resolve(1)
})

p1.then(function (data) {
    console.log('成功', data); //data数据为1
})

let p1=new Promise(function (resolve, reject) {
    $.ajax({
        url: "./php/ok.php",
        success: function (res) {
            console.log(res);
        }
    })
})

// 好处 就是没有那么多嵌套关系 是一个链式编程的结果

p1.then(function (data) {
    console.log('成功', data); 
    let p2=new Promise(function (resolve, reject) {
        $.ajax({
            url: "./php/ok.php",
            success: function (res) {
                console.log(res);
            }
        })
    })
    return p2;
})
.then(function (res) {
    console.log('成功的结果', res);
})

// 封装promise
function axios() {
    let p1=new Promise(function (resolve, reject) {
        $.ajax({
            url: "./php/ok.php",
            success: function (res) {
                console.log(res);
            }
        })
    })
    return p1
    // axios返回一个promise
}
// axios() 调用axios函数 得到 p1 new的promise
//axios 就是把发送ajax 用promise封装了一下
axios().then(function (res) {
    console.log('结果', res);
})

// 点击 发送ajax
// async await 最简单的使用 就是 可以省略掉then 简单快捷
document.getElementById("btn").onclick= async ()=> {
    let res = await axios(); //这里会等待成功 才执行下面
    console.log('结果', res);
}

// 重点 就一点 async + await 原理 是 generate + yield 的语法糖
// async + await 其实就是 generate + yield 的语法糖
// 为什么要有 async + await 因为方便 看起来代码清晰

// Promise.all(数组, 第二个参数函数)

// Promise.all([p1, p2, p3...], function)
// Promise.all 必须数组里面的所有的promise执行完毕 才成功
// 用在 要同时 有很多 结果一起成功的 情况

// Promise.race([p1, p2, p3...], function)
// Promise.race 只要 数组里面的任何一个成功 整个race就执行了




