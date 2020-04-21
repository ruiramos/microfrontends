# container-app

Ejected `create-react-app` application.
This is the main app, that includes `app-a` and `app-b` as components.

Run with `webpack-dev-server`

```
npm run start:dev
```

The location of the sub-app bundles are hardcoded in `index.js` for now, but
the idea is to extract them from the code and have them as enviroment variables,
when the app is served by a proper web server (work in progress).

All the magic happens in [index.js](./src/index.js).

