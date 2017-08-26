var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('buildDev', function (cb) {
    exec('ng build --aot --dev', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})


gulp.task('fbUseDev', function (cb) {
    exec('firebase use bludelivery-f28c2', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})


gulp.task('fbDeploy', function (cb) {
    exec('firebase deploy', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})


gulp.task('publishDev', ['buildDev', 'fbUseDev','fbDeploy' ]);