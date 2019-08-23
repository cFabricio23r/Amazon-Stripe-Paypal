const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.sass('resources/sass/app.sass', 'public/css')
    .tailwind('./tailwind.config.js');