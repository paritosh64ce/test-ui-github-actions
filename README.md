# TestUiGithubActions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.3.

## Motivation

* To create, build and deploy Angular application as Azure static web app.
* Use GitHub actions to do CI/CD

* Whenever a new change get committed
    - GitHub actions runs the workflow
    - builds the angular application
    - Deploys the output to Azure static app using the GitHub and Azure secret tokens

API url: https://paritosh-test-app.azurewebsites.net/weatherforecast
Demo: https://thankful-tree-06e6ab110.azurestaticapps.net/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
