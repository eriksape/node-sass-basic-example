var sass = require('node-sass');
var fs = require('fs');
const scss_filename = './theme.scss';
const css_filename = 'theme.css';

sass.render({
    file: scss_filename,
    outFile: css_filename,
    outputStyle: 'compressed'
}, function(err, result) {
    if(err){
        console.log(err);
    } else {
        fs.writeFile(css_filename, result.css, function(err){
            if(!err){
                //file written on disk
            }
        });
    }
});