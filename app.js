const getScreen = require('./util/ios');
const cropImg = require('./util/crop');
const getText = require('./util/getText');
const opn = require('opn');

(async () => {
  let start = Date.now();
  
  try {
    await getScreen();
    
    await cropImg();
    let res = await getText();
    if(res.words_result.length > 0){
      let word = res.words_result[0].words;
      
      if(word.indexOf('.') > -1){
        word = word.split('.')[1]
      }
      console.log(word);
      opn(`https://www.baidu.com/s?wd=${word}`);
      console.log(Date.now() - start);
      process.exit();
    }else {
      throw new Error('识别错误,请检查 image目录下output.png是否正确');
    }

  } catch (err) {
    throw err;
  }
})();