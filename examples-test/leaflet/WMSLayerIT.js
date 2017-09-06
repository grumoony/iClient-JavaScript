var commonTools = require('../base/commonTools');
module.exports = {
    'leaflet_WMSLayer': function (browser) {
        browser.windowMaximize();
        var type = 'leaflet';
        var exampleName = 'WMSLayer';
        commonTools.openExampleAndLoadMap(browser, type, exampleName);
        //测试过程中截取地图瓦片, 和已有的标准瓦片进行对比
        commonTools.cmpTestTileWithStdTile(browser, type, exampleName, 0, 0, 256, 256);
        browser.end();
    }
};
