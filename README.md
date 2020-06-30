# ideas42ventures.com [![Netlify Status](https://api.netlify.com/api/v1/badges/f9bb165d-6817-45fa-88ac-69fc6560e395/deploy-status)](https://app.netlify.com/sites/ideas42ventures/deploys)

The ideas42 Venture Studio website.

## Contributing

- This is a static site build using [Eleventy](https://www.11ty.dev/docs)
- Hosted on Netlify
- The living design files live in [Figma](https://www.figma.com/file/5ThSdBlZBcQnuyk15DWJNQ/Site?node-id=0%3A1)

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
