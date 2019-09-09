const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')

gulp.task('minify.image', () => {
    return gulp.src('../images/**/*.jpg')
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 93
            }),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest('../build/images/'))
})


gulp.task('copy.xml', function () {
    gulp.src('../images/**/*.xml')
        .pipe(gulp.dest('../build/images/'))
})


gulp.task('execute', ['minify.image', 'copy.xml'])

