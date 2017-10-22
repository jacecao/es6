const gulp = require('gulp');
const webpack = require('gulp-webpack');
// 实现浏览器自动刷新
// 如下面这样使用即可，加载在文件流最后，即每当有此任务的执行，都会执行刷新
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');

gulp.task('script', function () {
	gulp.src('src/js/main.js')
	.pipe(webpack({
		watch: true,
		module: {
			loders: {
				test: /\.js$/,
				loader: 'babel'
			}
		}
	}))
	.pipe(rename({
		basename:'app',
		extname: '.min.js'
	}))
	.pipe(gulp.dest('server/webroot/js'))
	.pipe(livereload());
});