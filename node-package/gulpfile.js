const {src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const gsass = require('gulp-sass');
const sass = gsass(require('sass'));
function browsersync() {
  browserSync.init({
    server:{baseDir: 'app/'},
    notify: false,
    online: true
  })
}

function styles() {
  return src('../app/sass/main.sass')
  .pipe(sass())
  .pipe(concat('app.min.css'))
  .pipe(dest('../app/css'))
}

exports.browsersync = browsersync;
exports.styles = styles;