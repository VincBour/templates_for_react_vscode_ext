import { PathLike } from "fs";
import { readdirSync } from "fs";
import { Uri } from "vscode";
import { FolderType } from "../types";
import { contentToStructure } from "../utils/content/contentToStructure";
import { getFolderContent } from "../utils/content/getFolderContent";
import { showInfo } from "../utils/vscode";

export const getTemplates = (path: PathLike, configurations: FolderType[]): FolderType[] => {
    
    const templates = readdirSync(path, { withFileTypes: true });
    
    const templatesAvailables = templates.filter(t => !configurations.find(c => c.name === t.name)?.disableTemplate);
    
    if (templatesAvailables.length === 0 && templates.length > 0) {
        showInfo('all templates seem to be disabled, changed properties disabledTemplate to false !!');
    }

    const filterTemplates = templatesAvailables.filter(f => f.isDirectory());
    
    const result = filterTemplates.map(file => {
        const uri = `${path}/${file.name}`;
        
        const contents = getFolderContent(Uri.parse(uri));
        
        const structure = contentToStructure(contents, `${uri}`);
        
        return {
            name: file.name,
            structure
        };
    });
    
    return result;
};

