let mix = require('laravel-mix');

mix.setPublicPath('dist');

mix.js('src/js/app.js', 'js').vue();
mix.sass('src/sass/app.scss', 'css');
mix.copyDirectory('public', 'dist');