const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const compass = require('gulp-compass');
const uglify = require('gulp-uglify');
const miniHtml = require('gulp-minify-html');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');


let jsSources = ['components/scripts/**/*.js'];
let sassSources = ['components/sass/*.scss'];


//Concantenate all JS files partial and pipe to 'development'
function concatFiles(cb) {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'));
    cb();
}

//compile sass into css and pipe it to 'development'
function sass(cb) {
  gulp.src(sassSources)
  .pipe(compass({
    sass: 'components/sass',
    image: 'builds/development/images',
    style: 'expanded'
  }))
  .on('error', gutil.log)
  .pipe(gulp.dest('builds/development/css'))
  cb();
}

function uglifyJs(cb) {
  gulp.src('builds/development/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('builds/dist/js'))
  cb();
}

//watch files for changes and update them
function watch() {
  gulp.watch(sassSources, sass);
  gulp.watch(jsSources, concatFiles);
}

//minifies HTML files and pipe them to 'dist' folder
function html(cb) {
  gulp.src('builds/development/*.html')
  .pipe(miniHtml())
  .pipe(gulp.dest('builds/dist/'))
  cb();
}

//minify compiled CSS and pipes it to 'dist'
function minifyCSS(cb) {
  gulp.src('builds/development/css/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('builds/dist/css'))
  cb();
}

//minify images and pipe to 'dist/images'
function minifyImages(cb) {
  gulp.src('builds/development/images/*.jpg')
  .pipe(imagemin([
  	imagemin.gifsicle({interlaced: true}),
  	imagemin.jpegtran({progressive: true}),
  	imagemin.optipng({optimizationLevel: 5}),
  	imagemin.svgo({
  		plugins: [
  			{removeViewBox: true},
  			{cleanupIDs: false}
  		]
  	})
  ]))
  .pipe(gulp.dest('builds/dist/images'))
  cb();
}
//prints message to the console
function defaultTask(cb) {
  gutil.log("Processing the files for Jaime's Project");

  cb();
}

exports.sass = sass
exports.concat = concatFiles
exports.default = gulp.series(defaultTask, concatFiles, html, minifyCSS, minifyImages, uglifyJs);
exports.watch = watch
