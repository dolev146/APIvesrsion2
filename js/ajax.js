export default function getData(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', cb);
    xhr.open('GET', url);
    xhr.send();
}
//# sourceMappingURL=ajax.js.map