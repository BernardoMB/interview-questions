packageWeights = [2,9,10,3,7];

function getHeaviestPackage(packageWeights) {
    const n = packageWeights.length;
    let cw = packageWeights[n-1];
    let hp = cw;
    for (let i = n - 1; i >= 1; i--) {
        if (cw > packageWeights[i - 1]) {
            cw = cw + packageWeights[i - 1];
        } else {
            cw = packageWeights[i - 1];
        }
        hp = Math.max(hp, cw);
    }
    return hp;
}

// Heaviest package weight
const hpw = getHeaviestPackage(packageWeights);

console.log(hpw);
