const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function create_pyramid(height) {
    for (let i = 1; i <= height; i++) {
        let row = ""

        for (let j = 0; j < height - i; j++) {
            row += " ";
        }

        for (let j = 0; j < i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

function prompt_quetion() {
    rl.question('Enter Height: ', (x_prompt) => {
        let x = parseInt(x_prompt);
    
        try {
            if (x >= 1 && x <= 8) {
                create_pyramid(x);
                rl.close();
            } else {
                throw "Invalid IDK";
            }
        } catch (e) {
            prompt_quetion();
        }
    });
}

prompt_quetion();