## Koa搭建精简版ES6开发环境


* #### 开发环境  

1. node >= v.6.x
2. gulp + webpack
3. ES6

gulp实现自动文件处理，这里也只是实现最简单的几个任务
如果需要添加css文本自动转换，可以按照tasks文件中script.js来写一个css转换任务

* #### 启动应用  

1. node start  或者 gulp default
2. 3000端口

另：该项目自动刷新插件仅仅用于小项目，大项目请使用其他刷新插件。