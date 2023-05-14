import { IBundlerFramework, IFrameworkConfig, IFrameworkManager, IWorkspaceFramework } from "./types";
import { injectable } from "inversify";

@injectable()
export class FrameworkManager implements IFrameworkManager {
    workspaceFramework?: IWorkspaceFramework;
    bundlerFramework?: IBundlerFramework;
    test = "frame";

    constructor() {}

    init = (workspaceConfig: IFrameworkConfig, bundlerConfig: IFrameworkConfig) => {};
}
