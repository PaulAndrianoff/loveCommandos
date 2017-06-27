const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

const config = {
	js: {
		src: ['src/js/**/*.js', 'src/js/*.js'],
		dist: 'dist/js'
	},
	sass: {
		src: ['src/sass/**/*.scss', 'src/sass/*.scss'],
		dist: 'dist/css'
	}
}

gulp.task('js', () => {
	return gulp.src(config.js.src)
		.pipe(concat('bundle.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(config.js.dist))
})

gulp.task('sass', () => {
	return gulp.src(config.sass.src)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(config.sass.dist))
})

gulp.task('sass:watch', () => {
	gulp.watch(config.sass.src, ['sass'])
})

gulp.task('js:watch', () => {
	gulp.watch(config.js.src, ['js'])
})

gulp.task('default', ['js', 'sass', 'js:watch', 'sass:watch'])