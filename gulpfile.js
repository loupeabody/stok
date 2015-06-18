var gulp  = require('gulp')
  , livereload = require('gulp-livereload')
  , rename = require('gulp-rename')
  , myth  = require('gulp-myth');

//Register Watch Task
gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./site/css/style.pre.css', ['css:dev']);
});

// Register CSS dev processing Task
gulp.task('css:dev', function(){
  return gulp.src('./site/css/style.pre.css')
    .pipe(rename('css/style.css'))
    .pipe(myth())
    .pipe(gulp.dest('./site'))
    .pipe(livereload());
});