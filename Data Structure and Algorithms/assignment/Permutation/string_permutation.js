function contains_sameCharacters(str1, str2) {
    if (str1.length !== str2.length) return false;

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return (sortedStr1 === sortedStr2);
}

const started_time = performance.now ();
const isSame = contains_sameCharacters("abcd", "dbca");
console.log(isSame ? "They Match" : "Doesnt Match" );

const endTime = performance.now();

console.log("Took", (endTime - started_time), "to run");