import { Command, program } from "commander";
import { ICommandManager } from "./types/types";

export class CommandManager implements ICommandManager {
    constructor(program: Command) {
        this.init(program);
    }

    init = (program: Command) => {
        // TODO init program
        program
            .version("0.0.1")
            .description("Fullstack Workspace Toolkit")
            .option("-t, --test", "Log test message")
            .parse(process.argv);

        this.registerCommands(program);
    };

    registerCommands = (program: Command) => {
        // TODO register all commands in commands folder
    };

    onRawCommand = () => {
        // TODO find the command and run it on program
    };
}
