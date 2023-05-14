import { FrameworkManager } from "../frameworkManager/frameworkManager";
import { IProject, IProjectManager } from "../projectManager/types";
import { injectable, inject } from "inversify";
import { ManagerTypes } from "../types";

@injectable()
export class ProjectManager implements IProjectManager {
    projects?: { [id: string]: IProject };
    projectPaths?: string[];
    packagePaths?: string[];
    test = "project";

    constructor(
        @inject(ManagerTypes.FrameworkManager)
        private frameworkManager: FrameworkManager,
    ) {}

    getPackageJson = (projectId: string) => {
        return {};
    };

    updatePaths = () => {};
}
