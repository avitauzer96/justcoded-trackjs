var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp.src('src/*.js')
      .pipe(gp_concat('mini.js'))
      .pipe(gp_uglify())
      .pipe(gulp.dest('dist'));
  
    // place code for your default task here
});

gulp.task('default', ['js']);