### 说明
支持 mac+android, windows+android

需要安装adb并添加环境变量 以及 imagemagick

使用了百度的文字识别,去 百度云 创建账号并添加文字识别应用,将appid appkey SecretKey 放到config.js文件中

不同机型需要去util/crop.js 修改裁剪坐标以及长宽,目前参数仅在s8+上百万英雄测试通过

代码写的很渣,有错误请指出

### mac 使用方法

```
brew cask install android-platform-tools
brew install imagemagick
node install
node app.js
```




