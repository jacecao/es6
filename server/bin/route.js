const fs = require('fs');
const path = require('path');
const extname = path.extname;

/**
 * thunkify stat
 */

function stat(file) {
  return new Promise(function(resolve, reject) {
    fs.stat(file, function(err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}

module.exports = (app) => {

	app.use(async (ctx) => {

		// require('connect-livereload')();

		let _file_path = path.resolve(__dirname, '../webroot');
		let file_path = path.join(_file_path, ctx.path);
		let _extname = extname(ctx.path);

		// console.log('file_path:  ' + file_path);
		console.log('ctx.path: ' + ctx.path);
		// console.log('extname: ' + _extname);
		// console.log('file_name: ' + file_name);

		if (extname == '' || ctx.path.charAt(ctx.path.length - 1) == '/') {
		  file_path += 'index.html';
		}
		console.log('file_path' + file_path);
		// 判断访问文件是否存在
		const file_stat = await stat(file_path);

		if (file_stat.isFile()) {
			ctx.type = extname(file_path);
			ctx.body = fs.createReadStream(file_path);
		} else {
		    ctx.body = '<h3>404 NOT FOUND</h3>';
		}	
	});

}