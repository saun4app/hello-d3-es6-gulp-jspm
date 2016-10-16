'use strict';

let gulp = require('gulp');
let gulp_htmlmin = require('gulp-htmlmin');
let gulp_concat = require('gulp-concat');
let gulp_sequence = require('gulp-sequence');
let gulp_shell = require('gulp-shell')
let sourcemaps = require('gulp-sourcemaps');
let gulp_uglify = require('gulp-uglify');
let jspm = require('jspm');

////////
gulp.task('default', ['build']);
gulp.task('build', gulp_sequence(['jspm_build', 'css', 'html'], 'docs'));
gulp.task('ugly', ['set_ugly', 'build']);

////////
var task_config = require('./gulp-include/task_config.json');
var is_ugly = false;

//////
gulp.task('css', function () {
    return gulp.src(task_config.css.src_array)
        .pipe(sourcemaps.init())
        .pipe(gulp_concat(task_config.css.bundle_file))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(task_config.build.css));
});

gulp.task('docs', function () {
    gulp.src([task_config.build.root + '/*'])
        .pipe(gulp.dest(task_config.docs.root));

    gulp.src([task_config.build.js + '/*'])
        .pipe(gulp.dest(task_config.docs.js));

    gulp.src([task_config.build.css + '/*'])
        .pipe(gulp.dest(task_config.docs.css));
});

gulp.task('html', function () {
    return gulp.src(task_config.html.src_array)
        .pipe(gulp_htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(task_config.build.root));
});

gulp.task('jspm_build', function () {
    function _get_cmd_array() {
        let jspm_build = task_config.jspm_build;
        let cmd_array = (is_ugly) ? ['jspm', 'bundle-sfx', '--minify'] : ['jspm', 'bundle-sfx'];
        let cmd_str = cmd_array.concat([jspm_build.src_path, jspm_build.bundle_file]).join(' ');;

        return [cmd_str];
    }

    let cmd_array =_get_cmd_array();

    return gulp.src(task_config.jspm_build.src_path + '*.js', {read: false})
        .pipe(gulp_shell(cmd_array));
});

gulp.task('set_ugly', function () {
    is_ugly = true;
});
