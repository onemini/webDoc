vdom 是实现vue 和 React的重要基石
diff 算法是vdom中最核心、最关键的部分
vdom 是一个热门话题，也是面试中的热门问题

DOM操作非常耗费性能
以前用jQuery, 可以自行控制DOM操作的时机，手动调整
Vue和React时数据驱动试图，如何有效控制DOM操作

**解决方案**
有了一定复杂度，想减少计算次数比较难
能不能把计算，更多的转移为JS计算？因为JS执行速度很快
vdom - 用JS模拟DOM结构，计算出最小的变更，操作DOM

**用JS模拟DOM结构**

<div id="div1" class="container">
        <p>vdom</p>
        <ul style="font-size: 20px;">
            <li>a</li>
        </ul>
    </div>

    {
            tag: 'div',
            props: {
                className: 'container',
                id: 'div1'
            }
            children: [
                {
                    tag: 'p',
                    children: 'vdom'
                },
                {
                    tag: 'ul',
                    props: { style: 'font-size: 20px' }
                    children: [
                        {
                            tag: 'li',
                            children: 'a'
                        }
                    ]
                }
            ]
        }

通过snabbdom学习vdom

简洁强大的vdom库，易学易用
Vue参考它实现的vdom和difff
https://github.com/snabbdom/snabbdom

Vue3.0重写了vdom的代码，优化了性能
但vdom的基本理念不变，面试考点也不变
React vdom 具体实现和Vue也不同，但不妨碍统一学习