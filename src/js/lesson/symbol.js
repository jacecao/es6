let out_info = 'here no es6 process running';

{
	let s1 = Symbol('hello');
	let key = Symbol.for('key');

	const a = {
		// 对象增强写法
		[key](arg){
			return 'symbol ' + arg;
		}
	};

	a[s1] = 'hello Symbol';

	const objectSymbols = Object.getOwnPropertySymbols(a);

	// console.log(objectSymbols);

	// console.log(Reflect.ownKeys(a));
	// out_info = Symbol.keyFor(key); // 强耦合字符串
}

{
	let size = Symbol('size');

	class Collection {
		constructor () {
			this[size] = 0;
		}
		add (item) {
			this[this[size]] = item;
			this[size] ++;
		}

		static sizeOf (instance) {
			return instance[size];
		}
	}

	let ins = new Collection();
	// 类的内部方法不可枚举
	// 这里将symbol值作为类的内部属性可以防止被外部调用时修改
	console.log(Object.keys(ins));
	console.log(ins[size]);
	ins.add('plus');
	// out_info = ins[size];
	// out_info += '--' + Collection.sizeOf(ins);
}

{
	// symbol 内置的值 作为对象特殊属性
	const x = {};
	x[Symbol.replace] = (...s) => {
		return s;
	}

	out_info = 'hello'.replace(x, 'world');
}


export default out_info;