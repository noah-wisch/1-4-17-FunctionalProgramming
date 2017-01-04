let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'))
});

gulp.task('css', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'))
});

gulp.task('js', function() {
    return gulp.src('app.js')
        .pipe(gulp.dest('public/'))
});

/**
 * Gotcha's:
 *  only checks the files you specify. make sure directories are correct
 *  only checks files that EXIST WHEN U START GULPWATCHING
 *  It gets feisty w/ syntax/sass errors and will crash too often..
 * 
 */

gulp.task('watch', ['default'], function() {
    //gulp.watch('files-to-watch', 'task-to-run')
    gulp.watch('*.html', ['html']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.js', ['js']);
});