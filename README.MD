### 说明
支持 ios 以及 Android 下的答题软件自动搜索

### 工具以及软件
- adb (安卓)   windows下载adb添加环境变量 mac使用brew安装  `brew cask install android-platform-tools`
- wda (ios)    参考 https://testerhome.com/topics/7220 
- imagemagick(必须)  mac下推荐使用brew install imagemagick 安装

使用了百度的文字识别,去 百度云 创建账号并添加文字识别应用,将appid appkey SecretKey 放到config.js文件中

安卓和ios切换在app.js第一行引入的包

不同机型需要去util/crop.js 修改裁剪坐标以及长宽

代码写的很渣,有错误请指出

### 使用方法


```
npm install
node app.js
```




