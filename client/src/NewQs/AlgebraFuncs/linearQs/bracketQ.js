// let bracketType = ['c(x+b)', 'c(ax+b)', 'c(ax-b)', 'c(b-ax)'][RandomInt(4)];
export const bracketQ = (x, coefOfx, constTerm, outer, bracketType) => {
    switch (bracketType) {
        case 'c(x+b)': { return outer + '(x + ' + constTerm + ') = ' + (outer * (x + constTerm)) }
        case 'c(ax+b)': { return outer + '('+coefOfx+'x + ' + constTerm + ') = ' + (outer * (coefOfx*x + constTerm)) }
        case 'c(ax-b)': { return outer + '('+coefOfx+'x - ' + constTerm + ') = ' + (outer * (coefOfx*x - constTerm)) }
        case 'c(b-ax)': { return outer + '('+constTerm+' - ' + coefOfx + 'x) = ' + (outer * (constTerm - coefOfx*x)) }
        default: { return '(x+0) = ' + x }
    }
}