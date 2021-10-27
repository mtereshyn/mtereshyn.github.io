const prepro = 'sass';
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sass         = require('gulp-sass')(require('sass'));
const cleancss     = require('gulp-clean-css')


function browsersync() {
  browserSync.init({
    server: {baseDir: 'nimble-token/' },
    notify: false,
    online: true
  })
}

function styles() {
  return src('nimble-token/' + prepro + '/main.' + prepro + '')
  .pipe(eval(prepro)())
  .pipe(sass())
  .pipe(concat('token.min.css'))
  .pipe(cleancss(({ level: {1:{ specialComments: 0}}})))
  .pipe(dest('nimble-token/css/'))
  .pipe(browserSync.stream())
} ;


function scripts(){
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'nimble-token/js/token.js',
  ])
  .pipe(concat('token.min.js'))
  .pipe(uglify())
  .pipe(dest('nimble-token/js/'))
  .pipe(browserSync.stream())
}

function startWatch() {
  watch('nimble-token/**/*' + prepro + '/**/*', styles)
  watch(['nimble-token/**/*.js', '!nimble-token/**/*.min.js'], scripts)
  watch(['nimble-token/**/*.html']).on('change',browserSync.reload)
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;

exports.default     = parallel(styles, scripts,  browsersync, startWatch);