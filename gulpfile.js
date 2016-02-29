var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    gulp.src('./lib/angulartics-google-analytics.js')
            .pipe(uglify())
    .pipe(concat('angulartics-google-analytics.min.js'))
    .pipe(gulp.dest('dist'));
});

