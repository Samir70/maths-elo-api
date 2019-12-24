const RandomElement = (arr) => arr[Math.floor(Math.random()*arr.length)];
const RandomInt = (n) => Math.floor(Math.random()*n);

module.exports = {RandomElement, RandomInt}

//export default RandomElement;