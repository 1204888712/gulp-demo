var gulp = require("gulp");
// 获取 uglify 模块（用于压缩 JS）
var uglify = require("gulp-uglify");
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task("script", function (done) {
  // 1\. 找到文件
  gulp
    .src("js/*.js")
    // 2\. 压缩文件
    .pipe(uglify())
    // 3\. 另存压缩后的文件
    .pipe(gulp.dest("dist/js"));
  done();
});

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require("gulp-minify-css");

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task("css", function (done) {
  // 1\. 找到文件
  gulp
    .src("css/*.css")
    // 2\. 压缩文件
    .pipe(minifyCSS())
    // 3\. 另存为压缩文件
    .pipe(gulp.dest("dist/css"));
  done();
});

// 获取 gulp-imagemin 模块
var imagemin = require("gulp-imagemin");
// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task("images", function (done) {
  // 1. 找到图片
  gulp
    .src("images/*.*")
    // 2. 压缩图片
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    // 3. 另存图片
    .pipe(gulp.dest("dist/images"));
  done();
});

// 在命令行使用 gulp auto 启动此任务
gulp.task("auto", function (done) {
  console.log(22222);
  // 监听文件修改，当文件被修改则执行 css 任务
  gulp.watch("css/*.css", gulp.series("css"));
  // 监听文件修改，当文件被修改则执行 images 任务
  gulp.watch("images/*.*)", gulp.series("images"));
  done();
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
// gulp.task("default", ["css", "auto"]);// gulp3
gulp.task(
  "default",
  gulp.series("css", "images", 'auto', function test(done){ //done为任务函数提供的回调，用来通知任务已经完成
    console.log(done);
    
    done()})
);
