import { ICommandManager } from "./types";
import { inject, injectable } from "inversify";
import { ProjectManager } from "../projectManager/projectManager";
import { ManagerTypes } from "../types";

@injectable()
export class CommandManager implements ICommandManager {
    constructor(@inject(ManagerTypes.ProjectManager) private projectManager: ProjectManager) {
        this.init();
    }

    init = () => {
        // TODO init program
        // this.program
        //     .version("0.0.1")
        //     .description("Fullstack Workspace Toolkit")
        //     .option("-t, --test", "Log test message")
        //     .parse(process.argv);

        this.registerCommands();
    };

    registerCommands = () => {
        // TODO register all commands in commands folder
    };

    onRawCommand = () => {
        // TODO find the command and run it on program
        console.log("onRawCommand", this.projectManager.test);
    };
}
