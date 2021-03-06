# React micro-frontends

This repo contains 3 apps created and ejected from `create-react-app` that are
composed at run-time.

Both `app-a` and `app-b` export their main component as a `commonjs2` module
that the `container-app` consumes. The location of the app's bundles would only
need to be known at run-time - they could be specified by environment
variables so that the main app doesn't need to be rebuilt whenever a new
version of one of the apps gets released. The "sub-apps" also previewable separately
and can use common dependencies as externals, hooking up to the modules bundled on
the container app.

This example also uses `react-router` to show that the sub-apps would be able
to be mounted at different routes.

Most of the magic is in [container-app/src/index.js](./container-app/src/index.js).

## Running locally

Install all the dependencies with: (it will take a while)

```
npm run install:all
```

Then run the 3 apps with:

```
npm start
```

The main app will be available at http://localhost:8080, the individual
previews at http://localhost:8081 and http://localhost:8082.

## TODO

This is just a proof of concept with many problems left to solve:

- [ ] Doesn't work in production mode due to webpack tree-shaking (fixed with a plugin) and mangled exports (not solved yet)
- [ ] Requires modules to be named, on the container app webpack config
- [ ] Sub-app index is still hardcoded with external dependencies

I'm not even sure this is a good idea to start with. Feedback welcome!
