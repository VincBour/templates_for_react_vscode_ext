import { workspace } from "vscode";
import { FolderType } from "../types";

export const getConfiguration = <T>(target: string): T | undefined => {
    const configuration = workspace.getConfiguration('templates_for_react');
    return configuration.get(target);
};