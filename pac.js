function FindProxyForURL(url, host) {
  const DIRECT = 'DIRECT';
  const proxy_yes = 'SOCKS5 127.0.0.1:7890';

  if (isPlainHostName(host)) return DIRECT;

  const hosts = ['*github*', '*google*', '*youtube*', '*postman*', '*ytimg*', '*dmhy*', '*.ruanyifeng.com'];

  for (const _host of hosts) {
    if (shExpMatch(host, _host)) return proxy_yes;
  }

  return DIRECT;
}
