const gm = require('gm').subClass({imageMagick: true});
const path = require('path');
const cropImg = async () => {
  return new Promise((resolve, reject) => {
    const img = gm(path.join(__dirname,'../images/screenshot.png'));
    img.size((err, value) => {
      let w = value.width;
      // 参一参二 为裁剪后的图片尺寸大小
      // 参三参四 为对应要裁剪图片的 x,y 偏移量
      img.crop(w - 140, 400, 70, 400).write(path.join(__dirname,'../images/output.png'), (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  })

};

module.exports = cropImg;