import { Uri } from "vscode";
import { createStructure } from "../actions/createStructure";
import { getComponentName, getConfiguration, getTargetUri, getTemplates, pickTemplate, pickTemplateName } from "../lib";
import { channel } from "../outpuChannel/TemplatesChannel";
import { FolderType } from "../types";
import { changeCase } from "../utils/string/changeCase";
import { showError, showInfo } from "../utils/vscode";

export const folderTemplatesStructure = async (resource: Uri | string | undefined, templatesFolderPath: string) => {
    
    const targetUri = await getTargetUri(resource);
    if (!targetUri) {
        showError("No path Found !");
        return;
    }
    channel.appendLine('get path => ok');

    const configurations = getConfiguration<FolderType[]>("structures") || [];
    channel.appendLine('get structure configuration => ok');

    const templatesAvailable = getTemplates(templatesFolderPath, configurations);
    if (!templatesAvailable.length) {
        showError("No configured Folder Template Found !");
    }
    channel.appendLine('get folder template => ok');

    const templateName = await pickTemplateName(templatesAvailable);
    if (!templateName) {
        showError("Something went wrong, No template name selected !!");
        return;
    }
    channel.appendLine(`pick template name => ${templateName}`);

    const configurationTemplate = configurations.find(c => c.name === templateName);

    const template = pickTemplate(templatesAvailable, templateName);
    if (!template) {
        showError('Something went wrong, No template selected !!');
        return;
    }
    channel.appendLine(`pick template => ok`);

    let name = await getComponentName();
    if (!name) {
        showError('Something went wrong, No Component Name Selected !!');
        return;
    }
    if (template.name === "Hook") {
        name = name.slice(0,3) === "use" ? name : `use${name}`;
    }
    channel.appendLine(`get Component Name => ${name}`);

    let namingConvention = configurationTemplate?.namingConvention;
    if (!namingConvention && !(namingConvention === 'pascalCase' || namingConvention === 'camelCase' || namingConvention === 'noNC')) {
        showInfo(`property namingConvention is missing for the template ${configurationTemplate?.name}`);
        namingConvention = 'noNC';
    }

    

    const formatedName = namingConvention !== 'noNC' ? changeCase(name, namingConvention) : name;

    await createStructure(
        formatedName,
        template?.structure!,
        targetUri!,
        configurationTemplate?.withDirectory!
    );
};
