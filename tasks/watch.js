const gulp = require('gulp');

gulp.task('watch', function () {
	// 添加需要监听变化的文件和对应的处理流程
	gulp.watch('src/**/*.js', ['script']);
});