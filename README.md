# ideas42ventures.com [![Netlify Status](https://api.netlify.com/api/v1/badges/06655ace-67fc-4a5e-a30a-2d9066bc4cd2/deploy-status)](https://app.netlify.com/sites/ideas42ventures/deploys)

The ideas42 Venture Studio website.

- Production (temp): [https://ideas42ventures.netlify.app/](https://ideas42ventures.netlify.app/)
- Staging: Every pull request gets a preview deploy URL. Check the PR or Netlify for it.

## Contributing

- This is a static site build using [Eleventy](https://www.11ty.dev/docs)
- Hosted on Netlify
- The living design files live in Figma at [figma.com/file/5ThSdBlZBcQnuyk15DWJNQ](https://www.figma.com/file/5ThSdBlZBcQnuyk15DWJNQ/Site?node-id=0%3A1)

### Requirements

- node.js: LTS version recommended
- yarn: Latest version recommended

### Local setup

#### Clone the repo

```
git clone git@github.com:ideas42ventures/ideas42ventures.com.git
cd ideas42ventures.com
```

#### Install dependencies

```
yarn
```

#### Start the dev server and watcher

```
yarn start
```

The site will be available at [http://localhost:8080/](http://localhost:8080/).

#### Build without dev server or watcher

When you need to do a new build without starting the dev server or file watchers run:

```
yarn build
```

## Deploying

### To Production

We host this site on [Netlify](https://www.netlify.com/). Anything merged into the `main` branch is deployed to production.

### To Staging

We use Netlify preview builds. To see any branch in a live environment, push the branch to the remote and open a pull request.

## Code formatting

We format all JavaScript, CSS, and HTML with [Prettier](https://prettier.io). We use the [lint-staged with husky approach](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged) to make sure formatting happens for all contributors.
