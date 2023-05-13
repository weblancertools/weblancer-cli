import { Command } from "commander";

export interface ICommandManager {
    program: Command;
    init: () => void;
    registerCommands: () => void;
    onRawCommand: () => void;
}
