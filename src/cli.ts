import * as fs from 'fs';
import { replaceObjValRecursively } from './utils/replaceObjValRecursively';

const packageJsonText = fs.readFileSync('package.json', { encoding: 'utf-8' });
const packageJson = JSON.parse(packageJsonText);
const newPackageJson = {
    ...packageJson,
    exports: replaceObjValRecursively(packageJson.exports, './dist/', './'),
    files: ['*'],
    main: packageJson.main?.replace(new RegExp('./dist/', 'g'), './'),
    module: packageJson.main?.replace(new RegExp('./dist/', 'g'), './'),
    types: packageJson.main?.replace(new RegExp('./dist/', 'g'), './'),
    bin: packageJson.bin && replaceObjValRecursively(packageJson.bin, './dist/', './'),
}
fs.writeFileSync('dist/package.json', JSON.stringify(newPackageJson));