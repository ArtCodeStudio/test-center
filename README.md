# test-center

## Workspaces

We are using yarn 2 because we make use of the workspace feature of yarn 2 for this monorepo.

## Clone

This repository has submodules, so you need to pulling the latest submodules, too:

```sh
git clone git@github.com:ArtCodeStudio/test-center.git
cd test-center
git submodule update --init --recursive
```

If you have already pulled the repository with his submodules, you can just run:

```sh
git pull --recurse-submodules
```


## Prisma

The Prisma integration is based on [this yarn berry example](https://github.com/zachasme/prisma-examples/tree/latest/yarn-berry) and [the guide in the Nest.js documentation](https://docs.nestjs.com/recipes/prisma).

You can generate the prisma schema in the root of this project by running

```sh
yarn prisma generate
yarn prisma migrate dev --name init
```