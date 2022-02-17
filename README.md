## init vite template:
```bash
yarn create vite@latest app-name --template react-ts
```
## init jest template:
```bash
yarn add -D jest
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
yarn add -D @babel/preset-react @babel/preset-typescript @babel/preset-env
yarn add -D identity-obj-proxy
```
[^ from here](https://egghead.io/lessons/jest-adding-jest-with-typescript-support-to-a-vite-application)
## init jest with:
```bash
jest --init
```
## init files:
### configure babel file with:
```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
```
### configure ts file with:
```ts
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src", "./jest-setup.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
### configure jest.config.ts with:
```ts
export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: "jsdom",
};
```
### configure jest-setup.ts with:
```js
import '@testing-library/jest-dom'
```