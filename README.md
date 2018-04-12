# Express/Angular CLI Seed

Seed project that integrates the Angular CLI with NodeJS/Express.

## Installing using Yarn

This project was put together using `yarn` rather than `npm`.

Run `npm install -g yarn` to install yarn

Run `yarn` or `yarn install` to install the dependencies

## Serving the application

Two sections below outline how to run this project for development and production.

It will take some time for the Angular application to build, so if it doesn't show up in the browser, wait for a while and then refresh it.

## Development server

Run `yarn serve-dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Production server

Run `yarn serve-prod`.

This will build the Angular application using `ng build --prod` enabling minification and Ahead-Of-Time (AOT) compilation. It will then serve up on `localhost:3000`

## API

The api is accessed using the path `localhost:3000/api`. I've include a stub just to show that it works.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
