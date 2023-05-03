const { src, dest, watch } = require("gulp");

// src -> Buscar el archivo scss.
// dest -> manda los cambios del SCSS al CSS.

// CSS
const sass = require("gulp-sass")(require('sass')); // Llamo el sass que tengo en scripts del Package.json

const css = (done) => {
    src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest("src/modulos/build/css"));

    done();
}

const dev = (done) => {
    watch("src/scss/**/*.scss", css);
    // watch("src/js/**/*.js", javaScript);
    done();
}


module.exports = {
    css,
    dev
}