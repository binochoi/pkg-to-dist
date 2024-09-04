Simple library that moves package.json to dist folder and changes exports.
Use to publish a library in a dist folder
```sh
npm run build && npx pkg-to-dist && cd dist && npm publish
```