var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

/* STYLES FIELDS */

gulp.task('compile_css_fields', function() {

	return gulp.src('./fields/scss/*')
              .pipe(sass().on('error', sass.logError))
              .pipe(autoprefixer())
              .pipe(rename({
                extname: '.css'
              }))
              .pipe(gulp.dest('./fields/css/'));
});

/* STYLES ADMIN */

gulp.task('compile_css_admin', function() {

	return gulp.src('./css/scss/admin/main.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(autoprefixer())
              .pipe(rename('admin.css'))
              .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {

	gulp.watch(
		['./css/scss/admin/**/*'], 
		['compile_css_admin']
	);

	gulp.watch(
		['./fields/scss/**/*'], 
		['compile_css_fields']
	);
});

/* ------------------------------------------------------------------------------------------ */

gulp.task('default', ['watch']);