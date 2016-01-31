var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src(['app/scss/**/*.scss', '!app/scss/**/_*.scss'])
		.pipe(sass({
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css/'))
});

gulp.task('default', function() {
	gulp.watch('app/scss/**/*.scss', ['styles']);
});
