/*
    Gulp Configuration File
    Version: 0.3.0
*/


// General settings.
var production = false,
    devServerAdress = '127.0.0.1:8000';

// Path settings.
var sass_path = 'static/scss/',
    css_path =  'static/css/',
    js_path = 'static/js/',
    html_path = 'templates/';

// Browsers compatibility settings.
 var browser_support = [
    "ie >= 9",
    "ie_mob >= 10",
    "ie_mob >= 10",
    "ff >= 30",
    "chrome >= 34",
    "safari >= 7",
    "opera >= 23",
    "ios >= 7",
    "android >= 4.4",
    "bb >= 10"
];

// Require.
var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    plugins = require('gulp-load-plugins')();

// Functions.
// Compile SASS to CSS3 files.
gulp.task('sass',function(){
    gulp.src(sass_path.concat('**/*.scss'))
        .pipe(plugins.plumber())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({browsers: browser_support, cascade: true}))
        .pipe(gulpif(production, plugins.minifyCss()))
        .pipe(gulp.dest(css_path));
});

// Watch source files, compile them and reload page in browser when a modification is made.
gulp.task('default', ['sass'], function() {
    browserSync.init({
        proxy: devServerAdress
    });
    gulp.watch(css_path.concat('**/*.css'), browserSync.reload);
    gulp.watch(html_path.concat('*.html'), browserSync.reload);
    gulp.watch(js_path.concat('**/*.js'), browserSync.reload);
    gulp.watch(sass_path.concat('**/*.scss'), ['sass']);
});