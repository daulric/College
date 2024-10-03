function contains_sameCharacters(str1, str2) {
    if (str1.length !== str2.length) return false;

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return (sortedStr1 === sortedStr2);
}

// Get Start a time to calculate the time complexity
const started_time = performance.now ();

// Prints if the 2 strings are equal or not
const isSame = contains_sameCharacters("abcd", "dbca");
console.log(isSame ? "They Match" : "Doesnt Match" );

// Get the end time
const endTime = performance.now();

// Prints the time complexity
console.log("Took", (endTime - started_time), "to run");