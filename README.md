# ChemSchoolApp
School management app made with the MEAN stack with 4 dashboards (SuperAdmin,Admin,Teacher,Student).
Each user's role can only be affected by the SuperAdmin who must have the following details : 
Email : superadmin@mail.com
Password : superadmin
Once signed up, the user will be directed to the guest page until the SuperAdmin affects him a role, either it will be an Admin/teacher or student. As a consequence, the user will have access to his dashboard according to his role.
Front-end : Angular
Back-end : NodeJs

/******** User's Layout (teacher and students Layout)**************/
    *ToDo List
    *Notes
    *Exams
    
/****** Admin and SuperAdmin's Layout ************/
  *CRUD (Add - Delete - Edit : users, courses)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
