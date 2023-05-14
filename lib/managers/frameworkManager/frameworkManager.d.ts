import { ProjectManager } from "../projectManager/projectManager";
import { IBundlerFramework, IFrameworkConfig, IFrameworkManager, IWorkspaceFramework } from "./types";
export declare class FrameworkManager implements IFrameworkManager {
    private projectManager;
    workspaceFramework?: IWorkspaceFramework;
    bundlerFramework?: IBundlerFramework;
    test: string;
    constructor(projectManager: ProjectManager);
    init: (workspaceConfig: IFrameworkConfig, bundlerConfig: IFrameworkConfig) => void;
}
