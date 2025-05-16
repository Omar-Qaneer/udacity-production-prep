import gulp from "gulp"
import shell from "gulp-shell"

//Build
gulp.task("build",shell.task("parcel build index.html"))
gulp.task("parcel server",shell.task("parcel index.html"))

//Tests
gulp.task("test", shell.task("mocha"))


gulp.task("default",gulp.series("build","parcel server"))
