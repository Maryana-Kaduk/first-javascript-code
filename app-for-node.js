const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hi! We are really grateful, that you answer our 6 questions!')
console.log("Let's start!")
console.log("Loading....")
rl.question('Do you like programing on javascript? yes/no ', (answer1) => {
    rl.question('Do you what variables are and how to use them on javascript? yes/no ', (answer2) => {
        rl.question('What is your favorite theme in JavaScript?', (answer3) => {
            rl.question('Do you want to know more about javascript? yes/no', (answer4) => {
                rl.question('Do you like this poll?', (answer5) =>{
                    rl.question('Do you want to see more polls like this?', (answer6) => {
                        console.log(`your answers are:\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}\n4. ${answer4}\n5. ${answer5}\n6. ${answer6}`);
                        console.log('Thanks for attending this poll!');
                        rl.close();
                    });
                });
            });
        });
    });
});
