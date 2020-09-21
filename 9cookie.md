2.1问题分析
localstorage sessionstorage 我们学过存token
    考察cookie存储
    cookie放哪里，cookie能做的事情和存在的价值
2.2核心问题讲解
cookie: cookie机制 客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址Cookie一同提交给服务器

cookie 做什么？ 一般用来存储数据 比如用户的登录状态 不过现在经常用token 和 localStorage了


        document.cookie = "键=值； expires=过期时间"
        // cookie 后端会操作 但是 前端也可以操作
        document.cookie="username=zs"
        // 写一次 就多一个cookie
        document.cookie="age=18"

HTTP协议本身是无状态。什么是无状态呢， 即服务器无法判断用户身份。Cookie实际上是一小段的文本信息（key-value格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用response向客户端颁发一个Cookie.客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同Cookie一同提交给服务器。服务器检查该Cookie,以此来辨认用户状态。

        //获取
        console.log(document.cookie);
        // 取出来 是一个字符串形式 usernam=zs; age=18
        // 就需要split拆分处理字符串 获取 username 或者 age

        // localStorage sessionStorage cookie
        // cookie
            // 1 存的数据量小 2 默认浏览器关掉就过期了 但是可以设置过期时间 3 不太安全
            // localStorage 1 存的数据量大 2 不过期 除非你删掉

            // cookie是很久以前的技术 那时候用来存储用户登录 现在 localStorage 存token来操作
            // cookie 跨域有问题 现在都是 用 localStorage 存token 统一