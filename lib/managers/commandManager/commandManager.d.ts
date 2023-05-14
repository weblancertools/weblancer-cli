import { ICommandManager } from "./types";
import { ProjectManager } from "../projectManager/projectManager";
export declare class CommandManager implements ICommandManager {
    private projectManager;
    constructor(projectManager: ProjectManager);
    init: () => void;
    registerCommands: () => void;
    onRawCommand: () => void;
}
