function Promiseall(array) {
    return new Promisse ((resolve, reject) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            array[i].then(value => result.push(value))
            result[i] = result
        }
    })
} 