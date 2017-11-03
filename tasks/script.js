const gulp = require('gulp');
// 文件流处理
const gulpwebpack = require('webpack-stream');
// 文件重命名
const named = require('vinyl-named');
// 浏览器热更新
const livereload = require('gulp-livereload');
// rename
const rename = require('gulp-rename');

gulp.task('script', () => {
  return gulp.src(['src/js/main.js'])
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
