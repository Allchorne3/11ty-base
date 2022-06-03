let mix = require('laravel-mix');

mix
  .sass('src/scss/style.scss', 'public/assets/css/style.css')
  .js('src/js/app.js', 'public/assets/js/app.js')
  .copyDirectory('src/assets','public/assets')
  .copyDirectory('src/admin','public/admin')