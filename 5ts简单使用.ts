// Typescript 是JavaScript的一个超集， 支持es6标准
//Typescript  设计目标是开发大型应用，他可以编译成纯JavaScript, 编译出来的Javascript可以运行在任何浏览器上。
//简单来说：typescript 比javascript有更严格的类型要求
//好处：大家有类型的约束 就不会乱写不同的值 大型项目中的bug就少
// typescript严格要求类型
// 变量： 类型
// let num: number = 10
// num = 999
// num = 'abc'
// function add(x:number, y:number) : number
// 函数add参数 x y 是number类型 返回值也是number
// function add(x:number, y:number) : number {
//     return x+y
// }
// add(1,2)

//any 任何类型都行 就相当于平时写
// let abc: any = 111

// vue项目中的使用
// vue create 脚手架生成项目的时候 可以选择typescript那么你写代码 就要严格限制类型了
// msg!: string ; 确定msg非空 msg?: string; msg可有可无
// import { Component, Prop, Vue } from 'vue-property-decorator';
// import Add from '@/component/Add'
// @Component({
//     component:{Add}
// })
// export default class HelloWorld extends Vue {
//     @Prop() private msg! : string;
// }