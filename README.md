# microfrontends

Repository with some experiments and POCs of microfrontend architectures.

# Goals 

"Micro-frontends" that...
 - are dynamically linked at run-time (so that when the sub-apps update the "container" app doesn't need to be rebuilt)
 - know about each other's location via environment variables
 - work independently
 - share dependencies (so that common libraries are only sent once)
 - can be mounted in different routes

There's a version using [vanilla JS](./vanilla) and a version with [React](./react).
