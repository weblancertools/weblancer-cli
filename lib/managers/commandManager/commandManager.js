var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { inject, injectable } from "inversify";
import managerContainer from "../managerContainer";
import { ProjectManager } from "../projectManager/projectManager";
let CommandManager = class CommandManager {
    constructor(projectManager) {
        this.projectManager = projectManager;
        this.init = () => {
            // TODO init program
            // this.program
            //     .version("0.0.1")
            //     .description("Fullstack Workspace Toolkit")
            //     .option("-t, --test", "Log test message")
            //     .parse(process.argv);
            this.registerCommands();
        };
        this.registerCommands = () => {
            // TODO register all commands in commands folder
        };
        this.onRawCommand = () => {
            // TODO find the command and run it on program
            console.log("onRawCommand", this.projectManager.test);
        };
        this.init();
    }
};
CommandManager = __decorate([
    injectable(),
    __param(0, inject("projectManager")),
    __metadata("design:paramtypes", [ProjectManager])
], CommandManager);
export { CommandManager };
managerContainer.bind("commandManager").to(CommandManager);
