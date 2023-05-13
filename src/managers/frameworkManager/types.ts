import { IProjectManager } from "../projectManager/types";

export interface IFrameworkManager {
    workspaceFramework: IWorkspaceFramework;
    bundlerFramework: IBundlerFramework;
    projectManager: IProjectManager;
    init: (workspaceConfig: IFrameworkConfig, bundlerConfig: IFrameworkConfig) => void;
}

export interface IFrameworkConfig {
    name: string;
    version: string;
}

export interface IWorkspaceFramework {
    id: string;
    packageNameInRepo: string;
    packageVersionInRepo: string;
    projectManager: IProjectManager;
    publish: () => void;
    version: () => void;
    launch: () => void;
    bootstrap: () => void;
    list: () => void;
    changed: () => void;
    diff: () => void;
    exec: () => void;
    run: () => void;
    init: () => void;
    add: () => void;
    clean: () => void;
    import: () => void;
    link: () => void;
    create: () => void;
    info: () => void;
    repair: () => void;
    watch: () => void;
}

export interface IBundlerFramework {
    id: string;
    packageNameInRepo: string;
    packageVersionInRepo: string;
    projectManager: IProjectManager;
    build: () => void;
    preBuild: () => void;
    run: () => void;
    preRun: () => void;
    // Run a preview on builded version
    preview: () => void;
}
