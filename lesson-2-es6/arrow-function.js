evens = []; 

// ES6
const odds  = evens.map(v => v + 1)
const pairs = evens.map(v => ({ even: v, odd: v + 1 }))
const nums  = evens.map((v, i) => v + i)

// ES5
var odds  = evens.map(function (v) { return v + 1; });
var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
var nums  = evens.map(function (v, i) { return v + i; });