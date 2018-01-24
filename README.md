# OnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Firebase API key

This app requires the use a Firebase api key to access Firebase database features. You can acquire one of your own to use when running this project by visiting the [Firebase Website](https://firebase.google.com) and signing up for an account before taking the following steps:

* Add a new project (you'll have to name it).

* Once your new project is created, click the cog icon next to Project Overview to access your project settings.

* Click the button that says "Add Firebase to your web app" and copy the information from the modal window that pops up.

* Create a file called `api-keys.ts` in the `src/app/` directory and add the following code with your API key information in place of the 'xxx's:
```
export var masterFirebaseConfig = {
  apiKey: "xxxxx-xxxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  databaseUrl: "https://xxxxx.firebaseio.com",
  storageBucket: "xxxxx.appspot.com",
  messageingSenderId: "xxxxx"
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
