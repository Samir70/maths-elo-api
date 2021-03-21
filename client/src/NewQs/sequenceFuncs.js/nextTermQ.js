export const nextTermQ = (seq) => {
    let n = seq.length - 1
    return {
        q: 'Find the next term in \n' + seq.slice(0, n).join(', '),
        a: seq[n]
    }
}