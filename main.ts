#!/usr/bin/env node


import inquirer from "inquirer"
import chalk from "chalk"

while (true)
{let table = await inquirer.prompt([{
    name: "Table",
    message: (chalk.hex('#967bb6')("Which Table you want to generate")),
    type:(chalk.hex('#967bb6')("input"))
}])


console.log(chalk.rgb(255, 69, 0)("\nHere is your Table"))


for (let i = 1; i < 10; i++) {
    console.log(chalk.hex('#FF1493')(`${table.Table}  x  ${i} = ${table.Table*i}`))
    
}

let start = await inquirer.prompt([{
    name: "Start",
    message: (chalk.hex('#967bb6')("Do yo want to continue?")),
    type:"list",
    choices:["Yes","No"]
}])

if(start.Start ==="Yes" ){
    console.log()
}
else{
    
        console.log(chalk.rgb(255, 69, 0)("\nThank you....."))
        break;
}
}


