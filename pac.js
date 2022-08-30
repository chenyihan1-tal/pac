function FindProxyForURL(url, host) {
    const proxy_no = "DIRECT";
    const proxy_yes = "SOCKS5 127.0.0.1:7890";

    if (dnsDomainIs(host, "google.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "github.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "gstatic.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "githubassets.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "googleusercontent.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "openvpn.net")) { return proxy_yes; }
    if (dnsDomainIs(host, "githubusercontent.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "vscode.dev")) { return proxy_yes; }
    if (dnsDomainIs(host, "stackoverflow.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "gravatar.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "googlesyndication.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "googleapis.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "bgm.tv")) { return proxy_yes; }
    if (dnsDomainIs(host, "youtube.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "ytimg.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "ggpht.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "gstatic.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "googlevideo.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "btbtt12.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "nyaa.si")) { return proxy_yes; }
    if (dnsDomainIs(host, "trakt.tv")) { return proxy_yes; }
    if (dnsDomainIs(host, "greasyfork.org")) { return proxy_yes; }
    if (dnsDomainIs(host, "dmhy.org")) { return proxy_yes; }
    if (dnsDomainIs(host, "postman.co")) { return proxy_yes; }
    if (dnsDomainIs(host, "postman.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "getpostman.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "ant.design")) { return proxy_yes; }
    if (dnsDomainIs(host, "live.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "office.net")) { return proxy_yes; }

    return proxy_no;
}
