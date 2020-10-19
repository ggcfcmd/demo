function match(str) {
    let state = start
    for (const item of str) {
        state = state(item)
    }
    return state === end
}

function start(val) {
    return val === 'a' ? foundA : start(val)
}

function foundA(val) {
    return val === 'b' ? foundB : start(val)
}

function foundB(val) {
    return val === 'c' ? foundC : start(val)
}

function foundC(val) {
    return val === 'd' ? foundD : start(val)
}

function foundD(val) {
    return val === 'e' ? foundE : start(val)
}

function foundE(val) {
    return val === 'f' ? end : start(val)
}

function end(val) {
    return end
}

console.log(match('ababcdef'))