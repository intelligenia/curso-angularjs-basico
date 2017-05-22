'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() { 
 gulp.src('src')
    .pipe(webserver({
      port: 3000,
      livereload: true,
      open: true,
      proxies: [
        {
          source: '/api',
          target: 'http://angular-basico-01.cursos.intelligenia.com/api'
		}
      ]
    }));
});
