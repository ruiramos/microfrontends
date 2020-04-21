# react

This repo contains 3 apps created and ejected from `create-react-app` that are
composed at run-time.

Both `app-a` and `app-b` export their main component as a `commonjs2` module
that the `container-app` consumes. The location of the app's bundles would only
need to be known at run-time so they could be specified in env variables
preventing the main app to be rebuilt when a new version gets released.
They're also previewable separately and can use common dependencies as
externals.

This example also uses `react-router` to show that the sub-apps would be able
to be mounted at different route URLs.


Install all the dependencies with:

```
npm run install:all
```

The run the 3 apps with:

```
npm run start
```

The main app will be available at http://localhost:8080, the individual
previews at http://localhost:8081 and http://localhost:8082.
