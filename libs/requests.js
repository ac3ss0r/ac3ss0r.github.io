function post(url, data, async = false, handler = null) {
    const request = new XMLHttpRequest();
    request.open("POST", url, async);
    if (async)
        request.onload = function() { handler(request); };
    request.send(data)
    if (!async)
        return request.responseText;
}

function get(url, async = false, handler = null) {
    const request = new XMLHttpRequest();
    request.open("GET", url, async);
    if (async)
        request.onload = function() { handler(request); };
    request.send()
    if (!async)
        return request.responseText;
}

function make_request(url, method, data = "", async = false, handler = null) {
    const request = new XMLHttpRequest();
    request.open(method, url, async);
    if (async)
        request.onload = function() {
            handler(request);
        };
    if (data)
        request.send(data);
    else request.send();

    if (!async)
        return request.responseText;
}