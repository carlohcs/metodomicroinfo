  import gulp        from 'gulp';
  import less        from 'gulp-less';
  import concat      from 'gulp-concat';
  import order      from 'gulp-order';
  // import config      from './config';
  // import handlebars  from 'gulp-compile-handlebars';

  gulp.task('styles', () => {
    // gulp.src('src/**/*.less') // , {base: 'src'}
    gulp.src([
        'src/vendors.less',
        'src/app.less',
        'src/component/**/*.less']) // , {base: 'src'}
       /*.pipe(order([
        'src/vendors.less',
        'src/app.less'
       ], {base: 'src'}))*/
      //     // .pipe(handlebars(config))
    .pipe(less({
      paths: ['./src/']
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./src/dist/'));
  });
