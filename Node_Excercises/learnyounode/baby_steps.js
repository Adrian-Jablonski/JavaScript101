var numbs = (process.argv);
var sum = 0;

for (var i = 2; i < numbs.length; i++) {
    sum += Number(numbs[i]);
}
console.log((sum));