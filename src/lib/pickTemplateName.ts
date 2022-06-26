import { window } from "vscode";
import { channel } from "../outpuChannel/TemplatesChannel";
import { FolderType } from "../types";
import { showError } from "../utils/vscode";


export const pickTemplateName = async (templates: FolderType[]) => {
    if (!templates || templates.length === 0) {
        return showError('templates undefined or null');
    }

    return await window.showQuickPick(templates.map(t => t.name), {
        ignoreFocusOut: true,
    });
};