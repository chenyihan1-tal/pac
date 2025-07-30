const DIRECT = "DIRECT";
const PROXY = "PROXY 127.0.0.1:7890; DIRECT";

const hosts = [
  /t\.me/,
  /x\.com/,
  /telegram/,
  /bgm\.tv/,
  /v2ex\.com/,
  /github/,
  /google/,
  /youtube/,
  /dmhy\.org/,
  /greasyfork\.org/,
  /milkywayidle\.com/,
  /steamcommunity\.com/,
  /bitwarden\.com/,
];

function FindProxyForURL(url, host) {
  alert(url);
  alert(host);
  return hosts.some((_host) => _host.test(host)) ? PROXY : DIRECT;
}
