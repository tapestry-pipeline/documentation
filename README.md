# [![Tapestry-branding-logo](https://github.com/tapestry-pipeline/tapestry-cli/blob/main/front_end/app/build/static/media/tapestry_logo_color.c2bd66fd.png)][github]

[![shields.io npm version badge](https://img.shields.io/npm/v/tapestry-pipeline)][npm]
[![shields.io npm license badge](https://img.shields.io/npm/l/tapestry-pipeline)][npm]
[![shields.io custom website link badge](https://img.shields.io/static/v1?label=website&message=tapestry-pipeline.github.io&color=blue)][website]

# Tapestry Pipeline

View the documentation webpage [here](https://tapestry-pipeline.github.io/documentation).

[Read our case study for more information about user data pipelines and to learn how we built Tapestry.](https://tapestry-pipeline.github.io)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

[npm]: https://www.npmjs.com/package/tapestry-pipeline
[website]: https://tapestry-pipeline.github.io/
[github]: https://github.com/tapestry-pipeline
