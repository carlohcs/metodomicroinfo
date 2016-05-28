// Baseado em: http://markgoodyear.com/2015/06/using-es6-with-gulp/

  'use strict';

  import gulp  from 'gulp';
  import watch from 'gulp-watch';
  // import log   from 'gulp-util'.log;

  // Tasks
  import './etc/gulp/task.clean';
  import './etc/gulp/task.scripts';
  import './etc/gulp/task.styles';
  
  //log('Using environment: '+ process.env.ENVIRONMENT || 'prod');

  // Build
  gulp.task('build', [
      'clean',
      'scripts',
      'styles'
    ]);

  // Watch
  gulp.task('watch', () => {
    watch('./src/*.less', ['styles']);
    watch('./src/*.js', ['scripts']);
  });

  // Default
  gulp.task('default', ['clean', 'build', 'watch']);
