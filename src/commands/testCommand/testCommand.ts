import { ICommand } from "../types/types";

export const testCommand: ICommand<undefined> = () => {
    console.log("In test command");
}