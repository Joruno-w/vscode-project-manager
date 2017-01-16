let walker = require('walker');
let path = require('path');
let fs = require('fs');
let vscode = require('vscode');
const cp = require('child_process');
import {AbstractLocator, DirInfo, DirList} from './abstractLocator';

export class GitLocator extends AbstractLocator {

    public getKind(): string {
        return 'git';
    }

    public isRepoDir(projectPath: string) {
        return fs.existsSync(path.join(projectPath, '.git', 'config'));
    }

    public decideProjectName(projectPath: string): string {
        return path.basename(projectPath);
    }
}