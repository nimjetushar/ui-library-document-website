const gulp = require('gulp'),
    del = require('del');

const buildPath = '../ui-lib/dist/ui-library-documentation';

function moveBuildFolder() {
    return gulp.src(['dist/ui-library-demo/**.*'])
        .pipe(gulp.dest(buildPath));
}

function clean() {
    return del([buildPath], { force: true });
}

exports.default = gulp.series(clean, moveBuildFolder);
