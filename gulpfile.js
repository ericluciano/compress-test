const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')

gulp.task('default', () => {
    return gulp.src('../images/**/*.jpg')
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 50
            }),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest('../build/images/'))
})