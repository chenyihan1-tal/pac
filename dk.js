auto.waitFor();
device.wakeUp();

// 返回首页
home();
sleep(1000);

function doback() {
  for (var i = 0; i < 5; i++) {
    back();
    sleep(500);
  }
  home();
  sleep(500);
}

function doclock(canclock) {
  engines.execScript('wakeup', 'device.wakeUp();toast("wakeup")');
  device.setBrightnessMode(0); // 设置亮度模式 0 手动 1 自动
  device.setBrightness(0); // 设置屏幕亮 0-255

  sleep(500);

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
}

// 要打卡的日子
var clockDays = [
  '4_25',
  '4_26',
  '4_28',
  '4_29',
  '4_30',
  '5_6',
  '5_7',
  '5_8',
  '5_9',
  '5_10',
  '5_11',
  '5_13',
  '5_14',
  '5_15',
  '5_16',
  '5_17',
  '5_20',
  '5_21',
  '5_22',
  '5_23',
  '5_24',
  '5_27',
  '5_28',
  '5_29',
  '5_30',
  '5_31',
];

for (;;) {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var date = new java.text.SimpleDateFormat('yyyy/MM/dd HH:mm:ss').format(now);

  var isClockDay = clockDays.includes(now.getMonth() + 1 + '_' + now.getDate());
  var canclock = isClockDay && (hours === 9 || hours === 20);

  console.log(JSON.stringify({ date, isClockDay, canclock }));

  if (minutes === 20) {
    doclock(canclock);
    sleep(1000 * 60);
  }

  if (device.isScreenOn()) {
    lockScreen();
  }

  sleep(10000);
}
