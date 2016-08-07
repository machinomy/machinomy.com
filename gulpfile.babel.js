"use strict";

import gulp from 'gulp';
import clean from 'gulp-clean';

import metalsmith from 'metalsmith';
import markdown from 'metalsmith-markdown';
import layouts from 'metalsmith-layouts';
import permalinks from 'metalsmith-permalinks';
import serve from 'metalsmith-serve';
import watch from 'metalsmith-watch';
import htmlMin from 'metalsmith-html-minifier';
import postCss from 'metalsmith-postcss';

var SRC = './src',
    DIST = './dist';

var forge = metalsmith(__dirname)
    .metadata({
        title: 'Machinomy',
        description: 'Distributed platform for IoT micropayments',
        generator: 'Metalsmith',
        url: 'http://machinomy.com'
    })
    .source(SRC)
    .destination(DIST)
    .use(markdown())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars'
    }))
    .use(postCss({
        plugins: {
            'postcss-import': {},
            'cssnano': {},
            'postcss-nested': {}
        }
    }))
    //.use(imageMin({collapseWhitespace: true}))
    .use(htmlMin());

var buildForge = (metal) => {
    return metal.build((err) => {
        if (err) {
            // console.log(err);
            throw err;
        }
    });
};

gulp.task('metalsmith', () => {
    buildForge(forge)
});

gulp.task('serve', () => {
   let servingForge = forge
       .use(serve({
           port: 4000,
           verbose: true
       }))
       .use(watch({
           paths: {
               "${source}/**/*": "**/*"
           },
           livereload: true
       }));
    buildForge(servingForge);
});

gulp.task('clean', () => {
    return gulp
        .src(DIST, {read: false})
        .pipe(clean());
});

gulp.task('build', ['metalsmith']);
