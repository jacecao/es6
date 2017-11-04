let out_info = 'here no es6 process running';

let obj = {name: 'jace', age: '27'};

class Persion {
	// constructor 方法默认返回实例对象（即this）
	// 我们可以指定返回另外一个对象，即改变this指向
	// 这里我们将this指向了obj
	constructor () {
		return Object.create(obj);
	}
}

// out_info = new Persion() instanceof Object;
let per = new Persion();
out_info = per.name;

export default out_info;