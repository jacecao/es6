const gulp = require('gulp');
// 文件流处理
const gulpwebpack = require('webpack-stream');
// 文件重命名
const named = require('vinyl-named');
// 浏览器热更新
const livereload = require('gulp-livereload');
// rename
const rename = require('gulp-rename');
// 对编译中出现的错误进行，这里为什么需要处理
// 如果不处理抛出的编译错误（或语法错误）便会堵塞文件流
// 也就会出现进程终端的情况
// 解决这个问题我们使用gulp-plumber插进来解决
const plumber = require('gulp-plumber');

gulp.task('script', () => {
  return gulp.src(['src/main.js'])
    .pipe(plumber())
    // 编译js
    .pipe(gulpwebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
        }]
      }
    }))
    // 对文件重命名(其实就是复制一份文件并重命名)
    .pipe(rename({
      basename: 'app',
      extname: '.min.js'
    }))
    // 对编译后的文件指定储存地址
    .pipe(gulp.dest('server/webroot/js'))
    // 监听文件
    .pipe(livereload());

});
