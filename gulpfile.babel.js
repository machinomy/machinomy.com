"use strict";

import gulp from 'gulp';
import nano from 'gulp-cssnano';
import uncss from 'gulp-uncss';
import concat from 'gulp-concat';
import replaceHTML from 'gulp-html-replace';
import minimizeHTML from 'gulp-htmlmin';
import minimizeImages from 'gulp-imagemin';

gulp.task("css", () => {
    return gulp
        .src(['src/styles/foundation.css', 'src/styles/app.css'])
        .pipe(concat('styles.css'))
        .pipe(uncss({
            html: ['src/index.html']
        }))
        .pipe(nano())
        .pipe(gulp.dest('./dist/'));
});

gulp.task("html", () => {
    return gulp
        .src('src/index.html')
        .pipe(replaceHTML({
            css: 'styles.css'
        }))
        .pipe(minimizeHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task("images", () => {
    return gulp
        .src('src/images/*.svg')
        .pipe(minimizeImages())
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task("favicon", () => {
    return gulp
        .src('src/favicon.ico')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['css', 'html', 'images', 'favicon']);