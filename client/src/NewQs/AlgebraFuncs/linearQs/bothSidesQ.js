// generate the qs where the unknown is on both sides
/**
 * make sure to account for all types listed in sloveLinear:
 * let bothsSidestype = [
                'ax+b=x+?', 'x+?=b-ax', 'ax-b=x+?', '?-x=ax+b', 
                'ax+b=cx+?', 'b-ax=cx+?', 'cx+?=b-ax',
                'c(x+b)=ax+?', 'c(b-x)=ax+?'
            ][RandomInt(10)]
 */
const tidy = (u) => u < 0 ? ' - ' + (-u) : u === 0 ? '' : ' + ' + u
export const bothSidesQ = (x, coefOfx, constTerm, otherCoef, qType) => {
    switch (qType) {
        case 'ax+b=x+?': {
            let unknown = (coefOfx - 1) * x + constTerm;
            return coefOfx + 'x + ' + constTerm + ' = x' + tidy(unknown)
        }
        case 'x+?=b-ax': {
            let unknown = constTerm - (coefOfx + 1) * x;
            return 'x' + tidy(unknown) + ' = ' + constTerm + ' - ' + coefOfx + 'x'
        }
        case 'ax-b=x+?': {
            let unknown = (coefOfx - 1) * x - constTerm;
            return coefOfx + 'x - ' + constTerm + ' = x' + tidy(unknown)
        }
        case '?-x=ax+b': {
            let unknown = constTerm + (coefOfx + 1) * x;
            return unknown + ' - x = ' + coefOfx + 'x + ' + constTerm
        }

        case 'ax+b=cx+?': { //case 5
            let unknown = (coefOfx - otherCoef) * x + constTerm;
            return coefOfx + 'x + ' + constTerm + ' = ' + otherCoef + 'x' + tidy(unknown)
        }
        case 'b-ax=cx+?': {
            let unknown = constTerm - (coefOfx + otherCoef) * x;
            return constTerm + ' - ' + coefOfx + 'x = ' + otherCoef + 'x' + tidy(unknown)
        }
        case 'cx+?=b-ax': {
            let unknown = constTerm - (coefOfx + otherCoef) * x;
            return otherCoef + 'x' + tidy(unknown) + ' = ' + constTerm + ' - ' + coefOfx + 'x';
        }

        case 'c(x+b)=ax+?': {
            let unknown = otherCoef * constTerm + (otherCoef - coefOfx) * x;
            return otherCoef + '(x + ' + constTerm + ') = ' + coefOfx + 'x' + tidy(unknown)
        }
        case 'c(b-x)=ax+?': {
            let unknown = otherCoef * constTerm - (otherCoef + coefOfx) * x;
            return otherCoef+'('+constTerm+' - x) = '+coefOfx+'x'+tidy(unknown)
        }
        default: return '2x+0=x+' + x
    }
}