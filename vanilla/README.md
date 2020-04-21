# vanilla

A very simple micro-frontends implementation in vanilla javascript.  The main
container app is server-side rendered (using `express`) so that the location of
the "sub" apps can be specified with an env var (using a `.env` file).

The included sub apps are included via a javascript file - we simulate a
bundled `index.js` that "exports" a HTML element to be rendered in the
container app.

# Usage

Start all three web servers by running:

``` 
npm start 
```

Then visit the main app at http://localhost:8080.  The sub-apps are also
previewable independently, bound to ports 8081 and 8082.
