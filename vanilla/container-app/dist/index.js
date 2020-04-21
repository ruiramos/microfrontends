const containerA = document.querySelector('#app-a');
const containerB = document.querySelector('#app-b');

const data = JSON.parse(document.querySelector('#data').innerText.trim());

let module = {};

Promise.all([
  utils.loadScript(data.APP_A_LOCATION),
  utils.loadScript(data.APP_B_LOCATION)
]).then(([fnA, fnB]) => {
  fnA();
  let appA = module.exports;

  module = {};
  fnB();
  let appB = module.exports;

  containerA.appendChild(appA);
  containerB.appendChild(appB);
});
