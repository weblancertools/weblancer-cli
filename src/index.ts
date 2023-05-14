#!/usr/bin/env node

import "reflect-metadata";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import managerContainer from "./managers/managerContainer";
import { CommandManager } from "./managers/commandManager/commandManager";
import { ManagerTypes } from "./managers/types";

clear();
console.log(chalk.red(figlet.textSync("Weblancer-cli", { horizontalLayout: "full" })));

const commandManager = managerContainer.get<CommandManager>(ManagerTypes.CommandManager);
commandManager.onRawCommand();

// myModule.onRawCommand()
