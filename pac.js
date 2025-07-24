const DIRECT = "DIRECT";
const PROXY = "SOCKS5 127.0.0.1:7890; DIRECT";

const hosts = [
  /t\.me/,
  /telegram\.org/,
  /bgm\.tv/,
  /v2ex\.com/,
  /\bgithub\.(com|io)\b/,
  /.*google.*/,
  /youtube\.com/,
  /dmhy\.org/,
  /greasyfork\.org/,
  /milkywayidle\.com/,
  /steamcommunity\.com/,
];

function FindProxyForURL(url, host) {
  return hosts.some((_host) => _host.test(host)) ? PROXY : DIRECT;
}
