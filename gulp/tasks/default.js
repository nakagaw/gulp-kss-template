// default
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default',function(callback) {
    runSequence(
        ['sass', 'webpack'],
        'webserver',
        'watch',
    callback);
});

// build
gulp.task('build',function(callback) {
    runSequence(
        ['sass', 'webpack'],
    callback);
});

// sv
gulp.task('sv',function(callback) {
    runSequence(
        'webserver',
        'watch',
    callback);
});
