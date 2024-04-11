device.wakeUp();
auto.waitFor();

var storage = storages.create("CLOCK_LOG");

var doback = () => {
  for (var i = 0; i < 5; i++) {
    back();
    sleep(500);
  }
  home();
  sleep(500);
};

var doclock = (canclock) => {
  // 点击打卡
  if (canclock) {
    // 打开APP
    launchApp("知音楼");
    sleep(5000);
    doback();
    sleep(1000);
    launchApp("知音楼");
    sleep(5000);

    // 点击工作台
    id("tv_tab_title").text("工作台").findOne().parent().click();
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
  text("QQ").findOne().parent().click();
  sleep(1000);

  text("XAVIER").findOne().parent().click();
  sleep(1000);

  text("发送").findOne().click();
  sleep(1000);

  // 返回首页
  doback();
};

for (;;) {
  auto.waitFor();
  device.wakeUp();
  device.keepScreenDim(); // 保持屏幕常亮
  device.setBrightnessMode(0); // 设置亮度为手动模式
  device.setBrightness(0); // 设置屏幕亮度为最低;

  // 给我返回首页的时间
  sleep(3000);

  var now = new Date();
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var nowStr = new java.text.SimpleDateFormat("HH:mm").format(now);

  var canClockin =
    hour === 9 &&
    minute >= 15 &&
    minute <= 30 &&
    storage.get(`${date}_clockin`) !== 1;

  var canClockout =
    hour === 20 &&
    minute >= 5 &&
    minute <= 30 &&
    storage.get(`${date}_clockout`) !== 1;

  // 随机睡眠7-13分钟
  var r = Math.ceil(Math.random() * 6 + 7);
  if (hour !== 9 && hour !== 20) {
    r = 60;
    if (hour === 8) {
      r = 20;
    }
  }

  toastLog(`${nowStr} ${r} ${canClockin} ${canClockout}`);
  sleep(500);

  if (canClockin) {
    doclock(true);
    storage.put(`${date}_clockin`, 1);
  } else if (canClockout) {
    doclock(true);
    storage.put(`${date}_clockout`, 1);
  } else {
    doclock(false);
  }

  sleep(r * 60 * 1000);
}
