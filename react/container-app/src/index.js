import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

// the idea, when using a server to serve this app, is to inject these via environment
// variables. of course what we should be injecting is the location of some manifest of
// sorts in order to resolve to the correct file names with hashes.
const data = JSON.parse(
  document.querySelector("#data").innerText.trim() || "{}"
);

data.APP_A_LOCATION = "http://localhost:8081/static/js/bundle.js";
data.APP_B_LOCATION = "http://localhost:8082/static/js/bundle.js";

// loads an app (an exported react component) from a bundle url.
// the bundled is assumed to have been exported in commonjs2,
// potentially some externals (calls to require) and a single chunk.
function loadApp(url) {
  return fetch(url)
    .then((res) => res.text())
    .then(function (code) {
      // this is the module.exports object for our script
      let module = {};

      // this is the require function. require will only be called for externals, so we're assuming
      // they will be in this container's app modules cache.
      let require = (name) => {
        console.log("requiring", name);
        let r = eval("__webpack_require__");
        let moduleInCache = Object.keys(r.m).find(
          (key) => key.indexOf(`./node_modules/${name}/`) === 0
        );

        if (!moduleInCache) {
          console.log(r.m, name);
          throw new Error(`Couldnt find module ${name} in cache`);
        }

        return r(moduleInCache);
      };

      // execute the script
      eval(code);

      // return the exported component
      return module.exports;
    });
}

const AppA = React.lazy(() => {
  let app = loadApp(data.APP_A_LOCATION).then((r) => {
    console.log(r);
    return r;
  });
  return app;
});
const AppB = React.lazy(() => loadApp(data.APP_B_LOCATION));

ReactDOM.render(
  <React.StrictMode>
    <div className="AppContainer">
      <Router>
        <Switch>
          <Route exact path="/">
            <>
              <Header />
              <App />
            </>
          </Route>
          <Route path="/cheese">
            <>
              <Header />
              <Suspense fallback={<p>Loading app...</p>}>
                <AppA root="/cheese" />
              </Suspense>
            </>
          </Route>
          <Route path="/wine">
            <>
              <Header />
              <Suspense fallback={<p>Loading app...</p>}>
                <AppB root="/wine" />
              </Suspense>
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
