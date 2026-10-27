export interface IFolder {
    id: number;
    name: string;
    files?: IFile[]
}

export interface IFile {
    id: string
    name: string;
    folderName: string
    jsonContent: string
}