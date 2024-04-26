auto.waitFor();
device.wakeUp();

var storage = storages.create('CLOCK_LOG');

var doback = () => {
  for (var i = 0; i < 5; i++) {
    back();
    sleep(500);
  }
  home();
  sleep(500);
};

var doclock = canclock => {
  // 点击打卡
  if (canclock) {
    // 打开APP
    launchApp('知音楼');
    sleep(5000);
    doback();
    sleep(1000);
    launchApp('知音楼');
    sleep(5000);

    // 点击工作台
    id('tv_tab_title').text('工作台').findOne().parent().click();
    sleep(5000);

    // 点击考勤打卡
    click(150, 1400);
    sleep(5000);

    textMatches(/^[上下]班打卡.*/)
      .findOne()
      .click();
    sleep(5000);
  }

  // 截图
  sleep(1000);
  takeScreenshot();
  sleep(1000);

  // 分享截图
  click(160, 2050);
  sleep(2000);

  // 点击分享到QQ
  text('QQ').findOne().parent().click();
  sleep(1000);

  text('XAVIER').findOne().parent().click();
  sleep(1000);

  text('发送').findOne().click();
  sleep(1000);

  // 返回首页
  doback();
};

for (;;) {
  device.wakeUp();
  device.keepScreenDim(); // 保持屏幕常亮
  device.setBrightnessMode(0); // 设置亮度为手动模式
  device.setBrightness(0); // 设置屏幕亮度为最低;

  home();
  sleep(1000);

  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var date = new java.text.SimpleDateFormat('yyyy/MM/dd').format(now);

  // 两个小时的毫秒数
  var twoHours = 1000 * 60 * 60 * 2;
  // 早上打卡时间
  var clockinTime = new Date(`${date} 09:15:00`).getTime() + random(1000 * 60 * 3, 1000 * 60 * 10);
  // 晚上打卡时间
  var clockoutTime = new Date(`${date} 20:00:00`).getTime() + random(1000 * 60 * 5, 1000 * 60 * 10);

  var r = 0;

  // 如果当前时间小于早上打卡时间
  if (now.getTime() < clockinTime) {
    r = Math.min(clockinTime - now.getTime(), twoHours);
  }
  // 如果早上还没有打过卡
  else if (hour === 9 && storage.get(`${date}_clockin`) !== 1) {
    doclock(true);
    storage.put(`${date}_clockin`, 1);
  }
  // 如果当前时间小于晚上打卡时间
  else if (now.getTime() < clockoutTime) {
    r = Math.min(clockoutTime - now.getTime(), twoHours);
  }
  // 如果晚上还没有打过卡
  else if (hour === 20 && storage.get(`${date}_clockout`) !== 1) {
    doclock(true);
    storage.put(`${date}_clockout`, 1);
  } else {
    r = twoHours;
  }

  if (r > 0) {
    toastLog('等待时间：' + Math.ceil(r / 1000 / 60) + '分钟');
    doclock(false);
    sleep(r);
  }

  continue;
}
