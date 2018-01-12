var gulp = require('gulp')
var path = require('path')
var config = require('./admin/config')
var webpack = require('gulp-webpack')
var named = require('vinyl-named');

const webpackConfig = path.join(config.rootDirPath,'admin/build/webpack.pro.js')
const distPath = path.join(config.rootDirPath,'dist')

console.log()

gulp.task('webpack', function() {
    return gulp.src([path.resolve(config.rootDirPath,'./src/js/home.js'),path.resolve(config.rootDirPath,'./src/js/manage.js')])
           .pipe(named())
           .pipe(webpack( require('./admin/build/webpack.pro.js') ))
           .pipe(gulp.dest(distPath))
})