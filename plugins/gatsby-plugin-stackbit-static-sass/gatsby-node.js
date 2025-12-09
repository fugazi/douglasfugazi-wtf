const sass = require('sass');
const fse = require('fs-extra');

exports.onPostBootstrap = ({getNode}, configOptions) => {
    let result = sass.compile(configOptions.inputFile, {
        functions: {
            "getPaletteKey($key)": function(args) {
                function hexToRgb(hex) {
                    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                        return r + r + g + g + b + b;
                    });
        
                    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }
                let siteMetadata = getNode('Site').siteMetadata;
                let sassParams = siteMetadata.palettes[siteMetadata.palette].sass;
                let key = args[0].assertString('key').text;
                let value = sassParams[key];
                let colorRegExp = /^#(?:[a-f\d]{3}){1,2}$/i;
                
                if (colorRegExp.test(value)) {
                    let rgb = hexToRgb(value);
                    return new sass.SassColor({
                        red: rgb.r,
                        green: rgb.g,
                        blue: rgb.b
                    });
                } else if (typeof value === 'number') {
                    return new sass.SassNumber(value);
                } else {
                    return new sass.SassString(value);
                }
            }
        }
    });
    fse.outputFileSync(configOptions.outputFile, result.css);
};