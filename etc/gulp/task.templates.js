 import gulp from 'gulp';
 import handlebars from 'gulp-handlebars';
 import hbsPrecompiler from 'handlebars-precompiler';
 import concat from 'gulp-concat';
 import wrap from 'gulp-wrap';
 import declare from 'gulp-declare';

  gulp.task('templates', () => {
    return gulp.src('./src/**/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'Handlebars.templates',
        noRedeclare: true,
        processName: (filePath) => {
          return declare.processNameByPath(filePath.replace('src/', ''));
        }
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('./src/dist/'));
  });
