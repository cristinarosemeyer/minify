javascript:(function(){
    var d = document
       ,c = d.cookie
       ,m = c.match(/\bminDebug=([^; ]+)/)
       ,v = m ? decodeURIComponent(m[1]) : ''
       ,p = prompt('Debug Minify URIs on "' + location.hostname + '" \ncontaining: (empty to disable)', v)
    ;
    if (p === null) return;
    p = p.replace(/\s+/g, '');
    v = (p === '')
        ? 'minDebug=; expires=Fri, 27 Jul 2001 02:47:11 UTC; path=/'
        : 'minDebug=' + encodeURIComponent(p) + '; path=/';
    d.cookie = v;
})();