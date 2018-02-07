var gulp = require('gulp')
var path = require('path')
var config = require('./admin/config')
var gulpWebpack = require('gulp-webpack')
var named = require('vinyl-named');

const distPath = path.join(config.rootDirPath,'dist')

console.log()

gulp.task('webpack', function() {
    return gulp.src('src/js/*.js')
           .pipe(named())
           .pipe()
           .pipe(gulp.dest('dist/'))
})