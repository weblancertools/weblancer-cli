#!/usr/bin/env node
import "reflect-metadata";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import managerContainer from "./managers/managerContainer";
clear();
console.log(chalk.red(figlet.textSync("Weblancer-cli", { horizontalLayout: "full" })));
const myModule = managerContainer.get("commandManager");
// myModule.onRawCommand()
