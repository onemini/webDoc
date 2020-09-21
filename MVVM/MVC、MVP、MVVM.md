MV* 是指各种 MVC、MVP、MVVM 等 Web 设计模式，通过分离关注点来改进代码的组织方式，设计模式并不是凭空的创造，而是对复杂问题解决的不断提炼，即使没有看过这些设计模式的介绍，也许在日常开发中就已经使用了其中的思想

最简单的例子
用一个最简单的例子来展示各种设计模式
页面有一个 id 为 container 的 span，点击按钮会让其内容加 1
```javascript
<div>
    <span id="container">0</span>
  <button id="btn" onclick="javascript:add()">+</button>
</div>

<script>
  function add (){
    const container = document.getElementById('container');
    const current = parseInt(container.innerText);
    container.innerText = current + 1;
  }
</script>
```
视图渲染和数据处理的逻辑杂糅在一起，随着业务逻辑变复杂，代码将失控，难以维护

MVC

MVC 是 Model View Controller 的缩写

Model：模型层，数据相关的操作
View：视图层，用户界面渲染逻辑
Controller：控制器，数据模型和视图之间通信的桥梁

MVC 模型有很多变种和数据流动方式，最传统的 MVC 模型把视图渲染和数据处理做了隔离，通过控制器接收 View 操作，传递给数据模型，数据 ready 后由数据模型驱动视图渲染
```javascript

view

<div>
    <span id="container">0</span>
  <button id="btn">+</button>
</div>

model

function add (node) {
  // 业务逻辑处理
  const currentValue = parseInt(node.innerText);
  const newValue = currentValue + 1;

  // 更新视图
    node.innerText = current + 1;
}

controller

const button = document.getElementById('btn');
// 响应视图指令
button.addEventListener('click', () => {
  const container = document.getElementById('container');
  // 调用模型
    add(container);
}, false);

```

视图层最简单，处理页面的渲染
模型层定义了 +1 操作的实现，并更新视图数据
控制器在用户点击按钮的时候把请求转发给模型处理，在 web 开发中一般页面、接口请求的路由也是控制器负责。

在上面例子中为了尽量让数据处理和 UI 隔离，Controller 获取了 container 节点，做为参数传给了 Model，这样 Controller 需要理解 View，也就是和 View 的实现还是存在耦合，在 MVC 的实践中相当程度的业务逻辑实际会被写在 Controller 中，因为 Controller 被定位为 View 的 Model 沟通的桥梁，这部分耦合可以接受

但因为 View 的更新由 Model 处理，所以 Model 难免要和 View 的实现耦合，可以使用观察者模式让 View 监听 Mode 的数据变化做出更新，但这样 View 的实现又依赖的 Model

MVP
MVP 是 Model View Presenter 的缩写，可以说是 MVC 模式的改良，相对于 MVC 有了各层负责的任务和数据流动方式都有了部分变化

Model：和具体业务无关的数据处理
View：用户界面渲染逻辑
Presenter：响应视图指令，同时进行相关业务处理，必要时候获调用 Model 获取底层数据，返回指令结果到视图，驱动视图渲染

```javascript
view

<div>
    <span id="container">0</span>
  <button id="btn">+</button>
</div>
<script>
  // View Interface
    const globalConfig = {
    containerId: 'container',
    buttonId: 'btn',
  };
</script>

model

function add (num) {
  return num + 1;
}

presenter

const button = document.getElementById(globalConfig.containerId);
const container = document.getElementById(globalConfig.buttonId);

// 响应视图指令
button.addEventListener('click', () => {
  const currentValue = parseInt(container.innerText);
  // 调用模型
    const newValue = add(currentValue);
  // 更新视图
  container.innerText = current + 1;
}, false);

```

这样 Model 只处理业务无关的数据处理，会变得非常稳定，同时 Presenter 和 View 通过接口/配置桥接，相对于直接 MVC 耦合降低了很多

可以看出 MVP 相对于 MVC 数据与视图分离做的更为出色，在大部分时候使用 MVC 其实是在使用 MVP

MVVM

MVVM 可以写成 MV-VM，是 Model View - ViewModel 的缩写，可以算是 MVP 模式的变种，View 和 Model 职责和 MVP 相同，但 ViewModel 主要靠 DataBinding 把 View 和 Model 做了自动关联，框架替应用开发者实现数据变化后的视图更新，相当于简化了 Presenter 的部分功能

前端比较熟悉的 Vue 正是使用 MVVM 模式，使用 Vue 实现示例功能
示例功能用 Vue 可以轻松实现，为了展示 MVVM 示例代码刻意兜了一个圈子


```javascript
view

<div id="test">
  <!-- 数据和视图绑定 -->
    <span>{{counter}}</span>
  <button v-on:click="counterPlus">+</button>
</div>

model

function add (num) {
  return num + 1;
}

viewmodel

new Vue({
  el: '#test',
  data: {
    counter: 0
  },
  methods: {
    counterPlus: function () {
        // 只需要修改数据，无需手工修改视图
        this.counter = add(this.counter);
    }
  }
})

```
在 View 中做了数据和视图的绑定，在 ViewModel 中只需要更新数据，视图就会自动变化，DataBinding 由框架实现

总结
MVC、MVP、MVVM 三种流行的设计模式主要都是在解决数据和视图逻辑的分离问题，在实际使用中还有很多变种，总体而言

MVC 对视图和数据做了第一步的分离，实现简单，但 View、业务逻辑、底层数据模型 分离的不彻底
MVP 通过 Presenter 彻底解耦了 View 和 Model，同时剥离了业务逻辑和底层数据逻辑，让 Model 变得稳定，但业务逻辑复杂情况下 Presenter 会相对臃肿,MVP就是将MVC的业务逻辑从Model集中挪到了Presenter，从而数据流向也改变了
MVVM 通过 DataBinding 实现了视图和数据的绑定，但依赖框架实现，增加了理解成本，在错误使用的情况下调试复杂,而MVVM就是将MVP的Presenter中视图更新的代码用框架通过自动绑定进行了简化。