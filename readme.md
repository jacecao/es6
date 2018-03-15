# ES6

> 具备ES6浏览器环境，可以在里面运行下面的案例，也可以在node中单独运行下面的案例

* #### 关于箭头函数作用域的说明

箭头函数作用域是绑定于所在的环境中，不会改变。用列子说明如下    
```JavaScript
  // node环境
  global.name = 'global';

  let obj = {
    name: 'obj',
    get_name () {
      return function () {
        return this.name;
      }
    }
  }

  console.log(obj.get_name()());
  console.log(obj.get_name().bind(obj)());
```    
第一次打印出`global`,第二次打印出`obj`，说明当前作用域跟随执行环境发生改变的，如果理解了这点那我们来看看通过箭头函数会发生什么？    
```JavaScript
  // node环境
  global.name = 'global';

  let obj_1 = {
    name: 'obj',
    get_name () {
      return () => this.name;
    }
  }

  console.log(obj_1.get_name()());
  console.log(obj_1.get_name().bind(global)());
```     
这次你就会发现打印的都是`obj`,即使显示的绑定了作用域，那么得到的还是obj_1里的name，这就是非常有意思的地方，箭头函数将牢牢绑定this为初始对象(这也解释了为什么箭头函数不能作为构造函数)


