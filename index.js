module.exports = function(inputFile, outputFile, options) {
    var fs = require('fs');
    var util = require('util');
    var postcss = require('postcss');
    var colorsOnly = require('postcss-colors-only');

    function error(e) {
        console.log(e.message || e);
        process.exit(1);
    }

    options = options || {};
    options.inputFile = inputFile;
    options.outputFile = outputFile;

    fs.readFile(inputFile, 'utf8', function(err, data) {
        if (err) {
            error(err);
        }

        var processOpts = {
            from: inputFile,
        };

        if (outputFile) {
            processOpts.to = outputFile;
        }

        var result = postcss(colorsOnly(options)).process(data, processOpts);

        if (!outputFile) {
            console.log(result.css);
        }
    });
};
