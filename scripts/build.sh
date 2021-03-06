# js transform
#babel --presets react,es2015 js/source/ -d js/build
babel js/source/ -d js/build
# js package
browserify js/build/app.js -o bundle.js
browserify js/build/discover.js -o discover-bundle.js
# css package
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# check code
eslint js/source
# done
date; echo;

