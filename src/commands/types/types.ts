import { Command } from "commander";

export type ICommand<TInput> = (inputs: TInput) => void;
