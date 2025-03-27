const x = [
    359593, 379061, 361195, 360721, 320820, 311959, 329394, 378084, 421604, 500722,
    510901, 539903, 463235, 491409, 455085, 408124, 417760, 419904, 440655, 460905,
    424161, 435825, 467393, 508932, 503144, 355131, 326978, 273445, 328086, 247321,
    233924, 198363, 206345, 172118, 149259, 111300, 241161, 112979, 115813, 108064,
    71545, 84833, 80535, 70230, 79514, 58312, 64713, 61384, 49932, 24164, 22283, 52895
];
const y = [
    208018, 476198, 933452, 1305447, 1258651, 952470, 741844, 576463, 289002, 317082,
    267132, 214913, 160048, 152965, 104885, 95577, 102582, 110294, 123564, 96513,
    166777, 207685, 292068, 248365, 368457, 409888, 402654, 415765, 291267, 232054,
    197586, 154684, 113928, 101510, 86572, 58281, 55915, 48931, 47516, 40515, 29653,
    33472, 41919, 26304, 61564, 95272, 155795, 198769, 208988, 321349, 232227, 210930
];

function regressaoLinear(x, y) {

    const n = x.length;
    const sumX = x.reduce((acc, val) => acc + val, 0);
    const sumY = y.reduce((acc, val) => acc + val, 0);
    const sumXY = x.reduce((acc, val, idx) => acc + val * y[idx], 0);
    const sumX2 = x.reduce((acc, val) => acc + val * val, 0);
    
    const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - a * sumX) / n;
    
    const yPred = x.map(val => a * val + b);
    
    const meanY = sumY / n;
    const ssTotal = y.reduce((acc, val) => acc + (val - meanY) ** 2, 0);
    const ssResiduos = y.reduce((acc, val, idx) => acc + (val - yPred[idx]) ** 2, 0);
    const r2 = 1 - (ssResiduos / ssTotal);
    
    return { a, b, r2 };
}

const { a, b, r2 } = regressaoLinear(x, y);

console.log(`Equação da reta: y = ${a.toFixed(6)}x + ${b.toFixed(6)}`);
console.log(`Coeficiente de determinação (R²): ${r2.toFixed(6)}`);