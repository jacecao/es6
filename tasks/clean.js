// 文件清理
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function () {
	return del(['server/webroot/js', 'server/webroot/css']);
});