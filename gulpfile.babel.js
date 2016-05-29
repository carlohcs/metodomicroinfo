// Baseado em: http://markgoodyear.com/2015/06/using-es6-with-gulp/

  'use strict';

  import gulp  from 'gulp';
  import watch from 'gulp-watch';
  import runSequence from 'run-sequence';
  import gutil from 'gulp-util';
  import livereload from 'gulp-livereload';

  // import log   from 'gulp-util'.log;

  // Tasks
  import './etc/gulp/task.clean';
  import './etc/gulp/task.scripts';
  import './etc/gulp/task.styles';
  import './etc/gulp/task.templates';

  //log('Using environment: '+ process.env.ENVIRONMENT || 'prod');

  // Build
  gulp.task('build', (cb) => {
    runSequence('clean', [
      'templates',
      'scripts',
      'styles'],
      cb);
  });

  // Watch
  gulp.task('watch', () => {
    var
      templates,
      styles,
      scripts;

    // livereload.listen();

    templates = watch(['./src/**/*.hbs', '!./src/dist/**/*.templates.js'], ['templates']);
    styles    = watch(['./src/**/*.less', '!./src/dist/**/*.less'], ['styles']);
    scripts   = watch(['./src/**/*.js', '!./src/dist/**/*.js'], ['scripts']);

    templates.on('change', (ev) => {
      // if(ev.indexOf('.hbs') > -1) {
        console.log('Template has changed: ', ev);
        gulp.start('templates');
      // }
    });

    styles.on('change', (ev) => {
      // if(ev.indexOf('.less') > -1) {
        console.log('Style has changed: ', ev);
        gulp.start('styles');
      // }
    });

    scripts.on('change', (ev) => {
      // if(ev.indexOf('.js') > -1) {
        console.log('Script has changed: ', ev);
        gulp.start('scripts');
        // livereload();
      // }
    });
  });

  // Default
  gulp.task('default', (cb) => {
    runSequence('build', 'watch', cb);
  });
