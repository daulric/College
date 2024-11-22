function withArray(n: number) : number[] {
    let array = [0, 1];

    for (let i = 2; i <= n; i++) {
        array.push(array[i-1] + array[i-2]);
    }

    return array;
}

function recursive(n: number) : number {
    if (n <= 1) return n;
    return recursive(n - 1) + recursive(n - 2);
}

export { withArray, recursive };