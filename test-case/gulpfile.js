const prepro = 'sass';
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
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
  return src('app/' + prepro + '/main.' + prepro + '')
  .pipe(eval(prepro)())
  .pipe(sass())
  .pipe(concat('app.min.css'))
  .pipe(cleancss(({ level: {1:{ specialComments: 0}}})))
  .pipe(dest('app/css/'))
  .pipe(browserSync.stream())
} ;


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
  watch('app/**/*' + prepro + '/**/*', styles)
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts)
  watch(['app/**/*.html']).on('change',browserSync.reload)
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;

exports.default     = parallel(styles, scripts,  browsersync, startWatch);