const gulp = require('gulp')
const runSequence = require('run-sequence')

// run all dist tasks to deploy
gulp.task('index-page', (cb) => {
	runSequence(
		'clean-index-page',
		'css-index-page',
		'js-index-page',
		'html-index-page',
		'assets-index-page',
		cb
	)
})
