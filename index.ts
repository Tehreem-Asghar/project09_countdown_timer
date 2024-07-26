#! /usr/bin/env node
import inquirer from "inquirer";
import chalk  from "chalk";

 console.log(chalk.bold.bgMagenta('\t\t\tCountdown Timer\n'));
 
const answers = await inquirer.prompt([
  {
      type: 'input',
      name: 'time',
      message: chalk.green('Enter the countdown time in seconds:'),
      validate: (input) => {
          if (isNaN(input) || input <= 0) {
              return 'Please enter a valid positive number';
          }
          return true;
      }
  }
]);


function countDown(Seconds: number) {
  let endTime = new Date().getTime() + Seconds * 1000;

  let SetInterval = setInterval(() => {
    let currenTime = new Date().getTime();
    let diffrence = endTime - currenTime;

    if (diffrence <= 0) {
      clearInterval(SetInterval);
      console.log(chalk.hex('#FF69B4')("Countdown complete!"));
    } else {
      const secondsLeft = Math.ceil(diffrence / 1000);
      console.log(chalk.red('Time left:'), chalk.magenta(secondsLeft) , chalk.cyan('seconds'));
    }
  }, 1000);
}

countDown(answers.time)