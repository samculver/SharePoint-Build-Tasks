'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const flatten = require('gulp-flatten');
const build = require('@microsoft/sp-build-web');

let sassSubtask = build.subTask('create-css-file-subtask', function(gulp, buildOptions, done){
    const sassDest = buildOptions.production ? 'temp/deploy' : 'dist';
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(flatten())
    .pipe(gulp.dest(sassDest))
});

let sassTask = build.task('create-css-file', sassSubtask);

build.rig.addPostBuildTask(sassTask);
