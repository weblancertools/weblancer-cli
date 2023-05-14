import { Container } from "inversify";
import { CommandManager } from "./commandManager/commandManager";
import { ManagerTypes } from "./types";
import { ProjectManager } from "./projectManager/projectManager";
import { FrameworkManager } from "./frameworkManager/frameworkManager";

const managerContainer = new Container();

// initialize all managers
managerContainer.bind<CommandManager>(ManagerTypes.CommandManager).to(CommandManager).inSingletonScope();
managerContainer.bind<ProjectManager>(ManagerTypes.ProjectManager).to(ProjectManager).inRequestScope();
managerContainer.bind<FrameworkManager>(ManagerTypes.FrameworkManager).to(FrameworkManager).inSingletonScope();

export default managerContainer;
