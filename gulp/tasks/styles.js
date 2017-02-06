var gulp = require('gulp'),
    cssvars = require('postcss-simple-vars'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, mixins, nested, autoprefixer]))
    .on('error', function(errorInfo){
       console.log(errorInfo.toString());
      this.emit('end'); 
   })
       .pipe(gulp.dest('./app/temp/styles'));
});