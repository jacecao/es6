// gulpfile.js 为常见gulp执行入口文件
// gulpfile.babel.js 这个入口文件就必须要求满足babel运行的环境
// 也只有满足babel环境，才能使用import来引入模块
// 在不满足babel运行环境下，使用gulp会出现模块缺失提示
// 这里我们从最简单的gulpfile配置入手

// require-dir  这个默认能将目录下的文件，依次require，并返回一个对象
// 举例说明：
// dir 目录下有 default.js
// require_dir(dir) 执行后返回的是一个以目录下文件名为key的属性
// {default: require(./dir/default.js)}
// default的值为执行代码后的返回值或返回模块
const requireTasks = require('require-dir');

const module_obj = requireTasks('./tasks');
console.log(module_obj);