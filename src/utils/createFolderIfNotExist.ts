import * as fs from 'fs';
import * as path from 'path';

export default (folderName: string) => {
    // dist 폴더 경로 지정
    const distFolderPath = path.join(__dirname, folderName);

    // dist 폴더가 존재하는지 확인
    if (!fs.existsSync(distFolderPath)) {
        // 폴더가 없으면 생성
        fs.mkdirSync(distFolderPath, { recursive: true });
    }
}