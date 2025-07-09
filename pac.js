function FindProxyForURL(url, host) {
  const DIRECT = 'DIRECT';
  const proxy_yes = 'SOCKS5 127.0.0.1:7890';

  if (isPlainHostName(host)) return DIRECT;

  const hosts = [
    '*telegram.org',
    '*bgm.tv',
    '*asmr.one',
    '*v2ex.*',
    '*npmjs.com',
    '*w3.org',
    '*wikipedia.org',
    '*github*',
    '*google*',
    '*googlevideo.com',
    '*youtube*',
    '*postman*',
    '*ytimg*',
    '*dmhy*',
    '*ruanyifeng.com',
    'duckduckgo.com',
    'steamcommunity.com',
    '*.steampowered.com',
    '*xargin.com',
    '*t.me',
    '*greasyfork.org',
    '*milkywayidle.com',
    '*.hack.chat',
    '*.qi-e.top',
  ];

  for (const _host of hosts) {
    if (shExpMatch(host, _host)) return proxy_yes;
  }

  return DIRECT;
}
