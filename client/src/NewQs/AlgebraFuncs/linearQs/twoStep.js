// make sure to account for all cases in SolveLinear
// let twoStepTypes = ['ax+b', 'ax-b', 'b-ax'][RandomInt(3)];
export const twoStep = (x, coeffOfx, constTerm, qType) => {
    switch (qType) {
        case 'ax+b': { return coeffOfx + 'x + ' + constTerm + ' = ' + (coeffOfx * x + constTerm) }
        case 'ax-b': { return coeffOfx + 'x - ' + constTerm + ' = ' + (coeffOfx * x - constTerm) }
        case 'b-ax': { return constTerm + ' - ' + coeffOfx + 'x = ' + (constTerm - coeffOfx * x) }
        default: { return 'x + 0 = ' + x }
    }
}