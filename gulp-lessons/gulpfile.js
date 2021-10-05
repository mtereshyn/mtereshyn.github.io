const {src, dest, parallel, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function browsersync() {
  browserSync.init({
    server: {baseDir: 'app/'},
    notify: false,
    online: true

  })
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'app/js/app.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(dest('app/js/'))
} 

exports.browsersync = browsersync;
exports.scripts = scripts;