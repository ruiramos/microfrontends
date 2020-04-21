# app-a

One of the React applications that gets included in `container-app`.

It exports it's only component (`<App />`) as a commonjs module that the
container application will then require at runtime. It also uses external 
dependencies (`react`, `react-dom` and `react-router-dom`).

Start it with:
```
npm run start:lib
```

It's also previewable on it's own by visiting http://localhost:8081.

That's very much a POC as many things are hardcoded to make it work (namely
the location of the external libraries it depends on).

It works by having 2 entrypoints on the webpack config (./config/webpack.lib.config.js),
one for the exported component and one for the app preview, that is used by webpack's
HTML plugin. There's also some JS on the `index.html` in order to execute the exports
from the entrypoint.
