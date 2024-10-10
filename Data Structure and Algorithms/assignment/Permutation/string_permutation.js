const readline = require("readline");

function contains_sameCharacters(str1, str2) {
    if (str1.length !== str2.length) return false;

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return (sortedStr1 === sortedStr2);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (item1) => {
    rl.question("", (item2) => {
        const str1 = item1;
        const str2 = item2;

        const isSame = contains_sameCharacters(str1, str2);

        if (isSame) {
            console.log("YES");
        } else {
            console.log("NO");
        }
        
        rl.close();
    })
})