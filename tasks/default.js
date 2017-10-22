const gulp = require('gulp');
// 创建默认任务
// 即运行gulp便执行的任务
gulp.task('default', ['clean', 'script', 'watch', 'server']);