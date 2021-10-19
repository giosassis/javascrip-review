("Higher-order functions")

/*let total = 0, count = 1
while (count <= 10) {
    total += count
    count += 1
}

console.log(total)*/

//console.log(sum(range(1,10)))

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function repeatLog (n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// console.log(repeatLog(10))

// function repeat(n, action) {
//     for (let i = 0; i <= n; i++) {
//         action(i)
//     }
// }

//repeat(10, console.log)

//("Higher-order function")

// function greaterThan(n) {
//     return m => m > n
// }

// let greaterThan10 = greaterThan(50)
// console.log(greaterThan(20)) 

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)){
            passed.push(element)
        }
    }

    return passed
}

