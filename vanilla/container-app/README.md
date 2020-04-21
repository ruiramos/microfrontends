# container-app

This is the SSR app that serves as the container and includes the 2 other apps.
It uses express so that the location of the other apps can be injected via env
vars (uses `.env`).

To start everything, run `npm start` in the parent directory.

App A includes two "versions", available at `index` and `index-new`, try to
change the version in use on the `.env` file in this directory and restarting
the server. This simulates a new version of A being available.
