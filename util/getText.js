const fs = require('fs');
const path = require('path');
const AipOcrClient = require("baidu-aip-sdk").ocr;
const config = require('../config');
const client = new AipOcrClient(config.AppID, config.APIKey, config.SecretKey);

const getText = async () => {
  return new Promise((resolve, reject) => {
    
    let img = fs.readFileSync(path.join(__dirname,'../images/output.png')).toString("base64");
    client.generalBasic(img).then(function (result) {
      resolve(result);
    }).catch(function (err) {
      reject(err);
    });
  })
};

module.exports = getText;