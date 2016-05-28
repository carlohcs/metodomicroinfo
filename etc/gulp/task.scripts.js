  import gulp    from 'gulp';
  import uglify  from 'gulp-uglify';
  import concat  from 'gulp-concat';

  gulp.task('scripts:base', () => {
    gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/underscore/underscore-min.js',
      './node_modules/backbone/backbone-min.js',
      './node_modules/handlebars/dist/handlebars.min.js'
    ], {base: './'})
    .pipe(uglify())
    .pipe(concat('base.js'))
    .pipe(gulp.dest('./src/dist/'));
  });

  gulp.task('scripts', ['scripts:base']);
