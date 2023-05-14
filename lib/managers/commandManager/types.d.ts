export interface ICommandManager {
    init: () => void;
    registerCommands: () => void;
    onRawCommand: () => void;
}
