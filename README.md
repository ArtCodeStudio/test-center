# test-center

## Workspaces

We are using yarn 2 because we make use of the workspace feature of yarn 2 for this monorepo.

### Clone

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

