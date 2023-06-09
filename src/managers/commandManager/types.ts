import { Command } from "commander";

export interface ICommandManager {
    init: () => void;
    registerCommands: () => void;
    onRawCommand: () => void;
}
