function create_polynomial(n) {
    let storage = "";

    for (let x = 1; x <= n; x++) {
        let temp_dump = "";

        for (let y = 1; y <= n; y++) {
            temp_dump += `${(x*y)}, `
        }

        if (storage.length === 0) {
            storage += temp_dump;
        } else {
            storage += `\n${temp_dump}`;
        }
    }

    return storage;

}

console.log(create_polynomial(9));