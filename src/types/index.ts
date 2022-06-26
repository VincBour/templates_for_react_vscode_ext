export type FolderType = {
    name: string;
    structure: FileSettingsType[];
    withDirectory?: boolean;
    disableTemplate?: boolean;
    nammingConvention?: string;
};

export type FileSettingsType = {
    name: string;
    template?: string | string[]
};

export type FolderContentType =  {
    filePath: string;
    content: string | null;
};
