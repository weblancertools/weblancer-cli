import { Command } from "commander";

export interface ICommandManager {
    init: (program: Command) => void;
    registerCommands: (program: Command) => void;
    onRawCommand: () => void;
}
