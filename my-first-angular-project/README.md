# MyFirstAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## The Goal

> Create a new Angular Component to display a table of data

| First Name | Last Name | Email | Sales Volume |
| ------ | ------ | ------ | ------ |
| Ryan | Morrison | ryanmorrisonsay@yahoo.com | 50000 |
| Ryan | Morrison | ryanmorrisonsay@yahoo.com | 50000 |
| Ryan | Morrison | ryanmorrisonsay@yahoo.com | 50000 |
| Ryan | Morrison | ryanmorrisonsay@yahoo.com | 50000 |

## Development Process

- Create a new project
- Update main template page
- generate a new component
- add new component selsector to app template page
- Generate a `SalesPerson` class
- in `PersonListComponent`, create sample data
- in `sale-person-list` template file, build HTML table by looping over data

## Step 1: Create a new project

> ng new sales-project

> cd sales-project

## Step 2: Update main template page

> <h1>Sales Team</h1>

## Step 3: Generate a new component

> ng generate component sales-person-list

## About the generate file

> sales-person-list.component.ts: the component class

> sales-person-list.component.html: the component template HTML

> sales-person-list.component.css: the component private CSS

> sales-person-list.component.spec.ts: the unit test specifications

> UPDATE src/app/app.module.ts: Adds the component to the main application module

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
