const {exec} = require('child_process');
const path = require('path');

const cmdscreencap = 'adb shell screencap -p /sdcard/test.png';
const cmdpullpic = `adb pull /sdcard/test.png ${path.join(__dirname,'../images/screenshot.png')}`;

const getScreen = async () => {
  return new Promise((resolve, reject) => {
    exec(cmdscreencap, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        exec(cmdpullpic, (error, stdout, stderr) => {
          console.log(stdout);
          if (error) {
            reject(error);
          } else {
            resolve(stdout);
          }
        });
      }
    });
  })
};

module.exports = getScreen;