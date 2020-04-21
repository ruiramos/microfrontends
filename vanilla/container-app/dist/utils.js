var utils = {};

utils.loadScript = function(path){
  return fetch(path)
    .then(res => res.text())
    .then(script => {
      return new Function(script);
    });
}

