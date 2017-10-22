const gulp = require('gulp');
// gulp 创建服务器
// 这个gulp-live-server模块可以创建和启动服务
// 也可以运行本地创建的服务
// 这里我们采用运行本地创建的服务
const gls = require('gulp-live-server');

gulp.task('server', function () {
	var server = gls.new(['--harmony', 'server/bin/app.js']);
	server.start();
	// console.log('hey server');

	// 监听文件是否变动
	gulp.watch(['server/webroot/**/*.js','server/webroot/index.html'], 
		function (file) {
			console.log('file change');
			server.notify.apply(server, [file]);
		}
	);
	// 监听服务启动文件是否发生变化，一旦有变动就重启服务器
	gulp.watch(['server/bin/app.js', 'server/bin/route.js'], function () {
		console.log('服务刷新！！');
		server.start.bind(server)();
	});
});