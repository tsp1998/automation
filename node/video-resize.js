const fs = require('fs')
const path = require('path')
var ffmpeg = require('fluent-ffmpeg');
function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);

    if (base.lastIndexOf(".") != -1) {
        base = base.substring(0, base.lastIndexOf("."));
    }

    return base;
}

const folderPath = '/home/shubham/Videos/Swag/convert'

const files = fs.readdirSync(folderPath)

files.forEach(function (val, index, array) {
    var filename = val;
    var basename = baseName(filename);
    console.log(index + ': Input File ... ' + filename);

    ffmpeg(path.join(folderPath, filename))
        .output(basename + '-1280x720.mp4')
        .videoCodec('libx264')
        .size('1280x720')

        .on('error', function (err) {
            console.log('An error occurred: ' + err.message);
        })
        .on('progress', function (progress) {
            console.log('... frames: ' + progress.frames);
        })
        .on('end', function () {
            console.log('Finished processing');
        })
        .run();
});