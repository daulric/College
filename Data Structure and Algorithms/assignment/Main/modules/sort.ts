function QuickSort<T>(arr: T[]) : T[] {
    let length = arr.length;

    if (length <= 1) return arr;

    let pivot = arr[Math.floor(arr.length / 2)];

    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);

    return [...QuickSort(left), ...middle, ...QuickSort(right)];
}

function BubbleSort<T>(arr: T[]) : T[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j] ] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}

const a_arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

let start = performance.now();
let sorted = QuickSort<number>(a_arr);
let a_end = performance.now() - start;

const b_arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

let b_start = performance.now();
let b_sorted = BubbleSort<number>(b_arr);
let b_end = performance.now() - b_start;

console.log(a_end < b_end ? "QuickSort Wins" : "BubbleSort Wins");
console.log(a_end, b_end);

/* 
Bubble Sort is  quicker when handling arrays with small amount of numbers, BUT
QuickSort is way quicker when handling arrays with large amount of numbers.

ITS INSANELY FAST AND EFFECTIVE!!!!!
*/