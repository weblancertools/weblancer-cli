import { FrameworkManager } from "../frameworkManager/frameworkManager";
import { IProject, IProjectManager } from "../projectManager/types";
export declare class ProjectManager implements IProjectManager {
    private frameworkManager;
    projects?: {
        [id: string]: IProject;
    };
    projectPaths?: string[];
    packagePaths?: string[];
    test: string;
    constructor(frameworkManager: FrameworkManager);
    getPackageJson: (projectId: string) => {};
    updatePaths: () => void;
}
