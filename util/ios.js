const wda = require('wda-driver');
const path = require('path');


const getScreen = async () => {
  const c = new wda.Client();
  await c.screenshot(path.join(__dirname, '../images/screenshot.png'));
};

module.exports = getScreen;