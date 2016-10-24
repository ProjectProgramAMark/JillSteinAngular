"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json", {
  // Doing this so gulp-typescript will compile with the current typescript version installed
  typescript: require('typescript')
});
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const fallback = require('connect-history-api-fallback');
// var log = require('connect-logger');



/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("app/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write(".", {sourceRoot: '/app'}))
        .pipe(gulp.dest("build/app"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(['app/**/*', 'index.html', 'styles.css', 'systemjs.config.js', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('build'))
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'ng2-modal/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    }).on('end', function(end) {
      console.log("end has occured here");
      browserSync.reload();
    });
    gulp.watch(["app/**/*.html", "app/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    }).on('end', function(end) {
      console.log("end has occured here");
      browserSync.reload();
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], () => {
    console.log("Building the project ...");
});

// Put it all together
gulp.task('serve', ['build', 'watch'], function() {
  console.log("Serving the project ...");
  browserSync({
    "injectChanges": false, // workaround for Angular 2 styleUrls loading
    "notify": false,
    "watchOptions": {
      "ignored": 'node_modules'
    },
    "port": 8000,
    "files": [
      "build/**/*.{html,htm,css,js}"
    ],
    "server": {
      "baseDir": "build",
      "middleware": [
        // TODO: figure out what's causing the logger to crash
        // log({ format: '%date %status %method %url' }),
        fallback({
          index: '/index.html',
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
        })
      ]
    }

  });
});
