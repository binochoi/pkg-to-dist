import * as fs from 'fs';
import * as path from 'path';

export default (folderName: string) => {
    const distFolderPath = path.join(__dirname, folderName);
    if (!fs.existsSync(distFolderPath)) {
        fs.mkdirSync(distFolderPath);
    }
}