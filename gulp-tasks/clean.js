const gulp = require('gulp')
const del = require('del')

gulp.task('clean-dev', (cb) => {
	del(['dev/**']).then(() => cb())
})

gulp.task('clean-dist', (cb) => {
	del(['.tmp/**', 'dist/**']).then(() => cb())
})

gulp.task('clean-boilerplate', (cb) => {
	del(['boilerplate/**/!(*.js)']).then(() => cb())
})

gulp.task('clean-index-page', (cb) => {
	del(['index-page/**/!(*.js)']).then(() => cb())
})

gulp.task('clean-index-page', (cb) => {
	del(['index-page/**/!(*.js)']).then(() => cb())
})
