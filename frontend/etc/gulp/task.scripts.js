  import gulp from 'gulp';
  import uglify from 'gulp-uglify';
  import concat from 'gulp-concat';
  import sourcemaps from 'gulp-sourcemaps';
  import jshint from 'gulp-jshint';

  gulp.task('scripts:base', () => {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/underscore/underscore-min.js',
        './node_modules/backbone/backbone-min.js',
        './node_modules/handlebars/dist/handlebars.min.js',
        './vendors/form-validator-project/assets/formValidator.js'
      ], {
        base: './'
      })
      .pipe(uglify())
      .pipe(concat('base.js'))
      .pipe(gulp.dest('./src/dist/'));
  });

  gulp.task('scripts:application', () => {
    return gulp.src([
        './src/app.js',
        './src/component/**/*.js',
      ], {
        base: './'
      })
      .pipe(jshint())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('application.js'))
      .pipe(sourcemaps.write('./src/maps'))
      .pipe(gulp.dest('./src/dist/'));
  });

  gulp.task('scripts', ['scripts:base', 'scripts:application']);