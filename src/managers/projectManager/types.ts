import { IBundlerFramework } from "../frameworkManager/types";

export interface IProjectManager {
    projects: { [id: string]: IProject };
    projectPaths: string[];
    packagePaths: string[];
    getPackageJson: (projectId: string) => { [key: string]: any };
    updatePaths: () => void;
}

export interface IProject {
    id: string;
    name: string;
    version: string;
    path: string;
    bundlerFramework: IBundlerFramework;
    features: IFeature[];
}

export interface IFeature {
    id: string;
    name: string;
    version: string;
    installPackages: string[];
    installScripts: string[];
}
