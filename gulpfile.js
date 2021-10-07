
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync  = require('browser-sync');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass')(require('sass'));
const cleancss     = require('gulp-clean-css')

function browsersync() {
  browserSync.init({
    server: {baseDir: 'app/' },
    notify: false,
    online: true
  })
}

function styles() {
  return src('app/sass/main.sass')
  .pipe(sass())
  .pipe(concat('app.min.css'))
  .pipe(autoprefixer({ overrideBrowserlist: ['last 10 versions'], grid: true}))
  .pipe(cleancss(({ level: {1:{ specialComments: 0}}})))
  .pipe(dest('app/css/'))
} 


function scripts(){
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'app/js/app.js',
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js/'))
  .pipe(browserSync.stream())
}

function startWatch() {
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts)
  watch(['app/**/*.html']).on('change',browserSync.reload)
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;

exports.default     = parallel(styles, scripts,  browsersync, startWatch);