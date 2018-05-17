var gulp = require('gulp');
var sass = require('gulp-sass')


// gulp.task('default', function () {
// 	min = 0;
// 	max = 1700;
// 	k = 7;
// 	for (let i = min; i < max; i = i+k) {
// 		if (i % k == 0) {
// 			console.log(i);
// 		}
// 	}
// 	console.log(`Числа от ${min} до ${max} кратное ${k}`);
// })

// gulp.task('hello', function () {
// 	d = new Date();
// 	console.log("Hello "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
	
// })

gulp.task('sass', function () {
	return gulp.src('*.sass')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('./'))
})

gulp.task('default', function () {
	gulp.watch('*.sass', ['sass', 'run'])
})

gulp.task('run', function () {
	
})