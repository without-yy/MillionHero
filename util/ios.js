const wda = require('wda-driver');
const path = require('path');

const c = new wda.Client();
const getScreen = async () => {
  await c.screenshot(path.join(__dirname, '../images/screenshot.png'));
};

module.exports = getScreen;