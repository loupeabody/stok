var gulp  = require('gulp')
  , livereload = require('gulp-livereload')
  , rename = require('gulp-rename')
  , myth  = require('gulp-myth');

var server = livereload();

//Register Watch Task
gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./site/css/style.pre.css', ['css:dev']);
  gulp.watch('./site/*.html', function(e) {
    return gulp.src('./site/*.html')
      .pipe(livereload());
  });
  gulp.watch('./site/js/**/*.js', function(e) {
    return gulp.src('./site/js/**/*.js')
      .pipe(livereload());
  });
});

gulp.task('css:dev', function(){
  return gulp.src('./site/css/style.pre.css')
    .pipe(rename('css/style.css'))
    .pipe(myth())
    .pipe(gulp.dest('./site'))
    .pipe(livereload());
});