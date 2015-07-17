var gulp  = require('gulp')
  , livereload = require('gulp-livereload')
  , rename = require('gulp-rename')
  , myth  = require('gulp-myth');

var server = livereload();

//Register Watch Task
gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./css/style.pre.css', ['css:dev']);
  gulp.watch('./*.html', function(e) {
    return gulp.src('./*.html')
      .pipe(livereload());
  });
});

gulp.task('css:dev', function(){
  return gulp.src('./css/style.pre.css')
    .pipe(rename('css/style.css'))
    .pipe(myth())
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});
