// make sure that every type declared in solveLinear.js is accounted for
// let qType = ['x+a', 'x-a', 'a-x', 'ax', 'a/x', 'x/a'][RandomInt(6)];
export const oneStep = (x, constTerm, qType) => {
    switch (qType) {
        case 'x+a': { return 'x + ' + constTerm + ' = ' + (x + constTerm) }
        case 'x-a': { return 'x - ' + constTerm + ' = ' + (x - constTerm) }
        case 'a-x': { return constTerm + ' - x = ' + (constTerm - x) }
        case 'ax': { return constTerm + 'x = ' + (constTerm * x) }
        case 'a/x': { return (constTerm * x) + '/x = ' + constTerm }
        case 'x/a': { return 'x/'+constTerm+' = '+x} //answer was changed to be x*constTerm
        default: return 'x = ' + x
    }
}