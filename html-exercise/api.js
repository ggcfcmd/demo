function classify() {

    let names = Object.getOwnPropertyNames(window);

    function filterOut(names, prop) {
        let set = new Set();
        prop.forEach(o => set.add(o));
        return names.filter(v => !set.has(v));
    }

    let js = new Set();
    let objects = [ 'escape', 'globalthis', 'console', 'BigInt', 'BigInt64Array', 'BigUnit64Array', 'Infinity', 'NaN', 'undefined', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'Array', 'Date', 'RegExp', 'Promise', 'Proxy', 'Map', 'WeakMap', '']
}