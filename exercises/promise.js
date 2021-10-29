function promiseAll(promise) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let pending = promise.length;
    for (let i = 0; i < pending; i++) {
      promise[i]
        .then((res) => {
          arr[i] = res;
          pending--;
          if (pending == 0) resolve(arr);
        })
        .catch(reject);
    }
  });
}
