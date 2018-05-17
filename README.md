# Angular Tempus Dominus Bootstrap 4 
[![npm version](https://badge.fury.io/js/ng-tempusdominus-bootstrap4.svg)](https://badge.fury.io/js/ng-tempusdominus-bootstrap4)

# About
This is an angular wrapper for the Bootstrap 4 datepicker:  "Tempus Dominus" version 5.


This version depends on the current version of tempus dominus bootstrap wich is in development, so this wrapper could have a lot of change in future.

# Installation
1) Install the directive via npm
```javascript
npm install ng-tempusdominus-bootstrap4 --save
```

2) Install & Include dependents libraries in your application:
    * jquery.js, 
    * bootstrap (.js & .css),
    * tempusdominus bootstrap 4 (.js & .css),
    * moment.
    
        ```
        npm install jquery bootstrap moment tempusdominus-core tempusdominus-bootstrap-4 --save
        ```

        <details>
            <summary>
            Example configuration for Angular-cli project with Angular 2, 4, and 5.
            </summary>
            In .angular-cli.json file:


        ```json 
            "styles": [
                "styles.css",
                "../node_modules/bootstrap/dist/css/bootstrap.min.css",
                "../node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css",
            ],
            "scripts": [
                "../node_modules/jquery/dist/jquery.min.js",
                "../node_modules/bootstrap/dist/js/bootstrap.min.js",
                "../node_modules/moment/min/moment.min.js",
                "../node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js"
            ],
        ```
        </details>

3) Add the `NgTempusdominusBootstrapModule` module import in your module.:
```javascript
import { NgTempusdominusBootstrapModule } from 'ng-tempusdominus-bootstrap4';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ...
    FormsMoudle,
    NgTempusdominusBootstrapModule,
    ...
  ]
})
export class SomeModule {}
```

4) Start using!


# Usage

Input group: (there are 3 directive you shoud use: `NgTempusdominusBootstrap`, `NgTempusdominusBootstrapInput`, and `NgTempusdominusBootstrapToggle`)
```html
<div class="form-group">
    <div class="input-group date" data-target-input="nearest" NgTempusdominusBootstrap>
        <input
        [(ngModel)]="startDate"
        (ngModelChange)="update()"
        [options]="startOptions"
        NgTempusdominusBootstrapInput
        type="text" class="form-control"
        />
        <div class="input-group-append" NgTempusdominusBootstrapToggle>
            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
        </div>
    </div>
</div>
```
Input Only: (use: `NgTempusdominusBootstrapInput`)
```html
<input
    [(ngModel)]="date"
    [options]="options"
    NgTempusdominusBootstrapInput
    type="text" class="form-control"
/>
```

## Parameters with `NgTempusdominusBootstrapInput`

### options

With `options` attribute you can pass an object containing all the required configuration for the tempus dominus v5.
All the options available in the original library are supported. Check the list of options on official website: https://tempusdominus.github.io/bootstrap-4/Options/

```javascript
options = {
    format: "DD.MM.YYYY",
    maxDate: moment(),
    minDate: date,
    // ...
};
```

# Examples
 * [Our demo here](https://fetrarij.github.io/ng-tempusdominus-bootstrap4/)
 * [browse our example code](./demo/src/app/)