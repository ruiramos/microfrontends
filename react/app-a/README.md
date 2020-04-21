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
