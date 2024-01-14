const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function comprimirImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
}

function comprimirJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
}

function compilacaoSass() {
    return gulp.src('./source/styles/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('build/styles'));
}

exports.watch = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilacaoSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimirJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimirImagens));
}