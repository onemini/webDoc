监听data变化的核心API是什么
核心 API - Object.defineProperty

如何实现响应式，代码演示

Object.defineProperty 的一些缺点 （ Vue3.0 启用 Proxy ）
Proxy 有兼容性问题
Proxy 兼容性不好，且无法polyfill

Object.defineProperty 基本用法

        const data = {}
        const name = "zhangsan"
        Object.defineProperty(data, "name", {
            get: function () {
                console.log('get');
                return name
            },
            set: function () {
                console.log('set');
                name = newVal
            }
        })

        // 测试
        console.log(data.name); //get zhangsan
        data.name = 'list' //set