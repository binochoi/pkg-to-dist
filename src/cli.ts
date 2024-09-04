import * as fs from 'fs';
import { replaceObjValRecursively } from './utils/replaceObjValRecursively';
import createFolderIfNotExist from './utils/createFolderIfNotExist';

const packageJsonText = fs.readFileSync('package.json', { encoding: 'utf-8' });
const packageJson = JSON.parse(packageJsonText);
const newPackageJson = {
    ...packageJson,
    files: ['*'],
    bin: replaceObjValRecursively(packageJson.bin, './dist/', './'),
    exports: replaceObjValRecursively(packageJson.exports, './dist/', './')
}
createFolderIfNotExist('dist');
fs.writeFileSync('dist/package.json', JSON.stringify(newPackageJson));