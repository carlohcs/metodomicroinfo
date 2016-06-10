  import gulp  from 'gulp';
  import clean from 'gulp-clean';

  gulp.task('clean', () => {
    return gulp.src('./src/dist/*')
      .pipe(clean());
  });
