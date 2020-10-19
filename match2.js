function match(str) {
    let state = foundA
    for (const item of str) {
        state = state(item)
    }
    return state === end
}

function foundA(val) {
    return val === 'a' ? foundB : foundA
}

function foundB(val) {
    return val === 'b' ? foundA2 : foundA(val)
}

function foundA2(val) {
    return val === 'a' ? foundB2 : foundA(val)
}

function foundB2(val) {
    return val === 'b' ? foundA3 : foundA(val)
}

function foundA3(val) {
    return val === 'a' ? foundB3 : foundA(val)
}

function foundB3(val) {
    return val === 'b' ? foundX : foundA(val)
}

function foundX(val) {
    return val === 'x' ? end : val === 'a' ? foundA3(val) : foundA(val)
}

function end() {
    return end
}

console.log(match('abcababcabx'))