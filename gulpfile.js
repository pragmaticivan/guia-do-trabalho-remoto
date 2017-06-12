'use strict';

const electric = require('electric');
const ghPages = require('gulp-gh-pages');
const gulp = require('gulp');

electric.registerTasks({
	gulp: gulp
});

// Deploy ----------------------------------------------------------------------

gulp.task('deploy', ['build'], () => {
	return gulp.src('dist/**/*')
		.pipe(ghPages({
			branch: 'wedeploy'
		}));
});
