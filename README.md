# lemoncode-cli

Lemoncode CLI for create seed projects with webpack.

## Files to create:
- `./config`:
  - `/helpers.js`
  - `/test/polyfills.js`
  - `/test/setupTest.js`
  - `/webpack/common.js`
  - `/webpack/app/base.js`
  - `/webpack/app/dev.js`
  - `/webpack/app/prod.js`

- `.babelrc`
- `.editorconfig`
- `.env`
- `.package.json`: Update scripts commands, jest config (and install libs)
- `tsconfig.json`
- `tslint.json`

## Dependencies

- `babel-polyfill@6`
- `whatwg-fetch@2`

- If react
  - `react@16`
  - `react-dom@16`
  - `react-hot-loader@3`
  - `react-router@3`

## Dev dependencies

### Testing
- `@types/enzyme@3`
- `@types/jest@22`
- `enzyme@3`
- `enzyme-adapter-react-16@1`
- `enzyme-to-json@3`
- `identity-obj-proxy@3`
- `jest@22`
- `raf@3`
- `ts-jest@22`

### App
- `@types/node@8`
- `tslint@5`
- `tslint-react@3`
- `typescript@2`
- If react
  - `@types/react@16`
  - `@types/react-dom@16`
  - `@types/react-hot-loader@3`
  - `@types/react-router@3`

### Using in package.json
- `env-cmd@7`
- `if-env@1`
- `cross-env@5`
- `rimraf@2`

### Webpack common dependencies
- `babel-core@6`
- `babel-preset-env@1`
- `awesome-typescript-loader@4`
- `css-loader@0`
- `html-webpack-plugin@3`
- `file-loader@1`
- `node-sass@4`
- `sass-loader@6`
- `tslint-loader@3`
- `url-loader@1`
- `webpack-merge@4`

### Webpack 3.x
- `extract-text-webpack-plugin@3`
- `style-loader@0`
- `webpack@3`
- `webpack-dev-server@2`

### Webpack 4.x
- `mini-css-extract-plugin`
- `webpack@4`
- `webpack-dev-server@3`


## How to run:

- Download repository:

- `cd` on folder

```bash
cd lemoncode-cli

```

- Link project to global:

```bash
npm link
```

- Now we could `cd` on our project path and run:

```bash
cd my-project
```

```bash
lemoncode-cli

```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
