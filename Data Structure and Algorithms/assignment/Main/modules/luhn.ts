function Luhn(card_number: number) : boolean | null {
    let card_str = card_number.toString()
    if (card_str.length > 16 || card_str.length < 16) return null;

    // We need to reverse the numbers.
    let card_arr = card_str.split("").reverse().map((i) => Number(i));

    /*
    We then multiply every second number by 2 
    and check if the number is greater than 9, 
    we split the number and add the values to get one value; 
    */

    for (let i = 1; i < card_arr.length; i += 2) {
        let temp_num = card_arr[i] * 2;

        if (temp_num > 9) {
            let new_num = 0;
            temp_num.toString().split("").map((i) => {
                new_num += Number(i);
            });

            temp_num = new_num;
        }

        card_arr[i] = temp_num;
    };

    // Add all the values together;
    let sum = 0;
    card_arr.map((i) => {
        sum += i;
    });

    console.log(sum);
    return sum % 10 === 0;
}

const is_valid = Luhn(4681240000208536);
console.log(is_valid ?  "Card is valid" : "Card is not valid");