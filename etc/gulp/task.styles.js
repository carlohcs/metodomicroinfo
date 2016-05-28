  import gulp        from 'gulp';
  import less        from 'gulp-less';
  import concat      from 'gulp-concat';
  // import config      from './config';
  import handlebars  from 'gulp-compile-handlebars';

  gulp.task('styles', () => {
    gulp.src('./src/*.less', {base: 'src'})
    // .pipe(handlebars(config))
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./src/dist/'));
  });
