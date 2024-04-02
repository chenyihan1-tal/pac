device.wakeUp();
auto.waitFor();

// 打开APP
home();
sleep(1000);
launchApp('知音楼');
sleep(3000);

// 点击工作台
click(600, 2260);
sleep(3000);

// 点击考勤打卡
click(150, 1400);
sleep(5000);

// 点击打卡
click(580, 1130);
sleep(5000);

// 截图
takeScreenshot();
sleep(1000);

// 返回
back();
sleep(1000);
back();
sleep(1000);
back();
sleep(1000);

// 打开QQ
launchApp('QQ');
sleep(3000);

// 点击搜索栏
click(620, 330);
sleep(1000);

// 搜索QQ号
setText('4529080');
sleep(1000);

// 点击头像
click(450, 450);
sleep(1000);

// 点击发送图片
click(255, 2300);
sleep(1000);

// 点击第一张图片
click(100, 1900);
sleep(1000);

// 点击发送
click(950, 2220);
sleep(1000);

// 返回
back();
sleep(1000);
back();
sleep(1000);
back();
sleep(1000);

// 返回首页
sleep(1000);
home();

// 锁屏
sleep(1000);
lockScreen();

// 结束
exit();
