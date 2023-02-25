function* gen(){
    yield 1;
    yield 2;
    yield 3
}

const g = gen()

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(arr){
    for (const v of arr) {
        yield v
    }
}
// of = values, in = indexes
const arr = iterate(["herb","maria","ana"]);

console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);