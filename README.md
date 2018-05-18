# Angular Tempus Dominus Bootstrap
[![npm version](https://badge.fury.io/js/ngx-tempusdominus-bootstrap.svg)](https://badge.fury.io/js/ngx-tempusdominus-bootstrap)

# About
This is an angular wrapper for the Bootstrap datetimepicker:  "Tempus Dominus" v5.
This wrapper will works with bootstrap 3 and with bootstrap 4.


This version depends on the current version of tempus dominus bootstrap wich is in development, so this wrapper could have a lot of change in future.

# Installation
### Install the directive via npm

```javascript
npm install ngx-tempusdominus-bootstrap --save
```
### Install required plugin if you didn't installed them yet


* jquery.js, 
* bootstrap (.js & .css),
* tempusdominus bootstrap 4 (.js & .css),
* moment.

## For bootstrap 4

    
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

## For bootstrap 3

    
```
npm install jquery bootstrap@^3.0.0 moment tempusdominus-core tempusdominus-bootstrap-3 --save
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
        "../node_modules/tempusdominus-bootstrap-3/build/css/tempusdominus-bootstrap-3.css",
    ],
    "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        "../node_modules/moment/min/moment.min.js",
        "../node_modules/tempusdominus-bootstrap-3/build/js/tempusdominus-bootstrap-3.js"
    ],
```
</details>

# Usage
 Import the `NgTempusdominusBootstrapModule` module in your module. You need `FormsModule` or `ReactiveModule` like all other form:
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

In your component html:

* Input group: (there are 3 directive you shoud use: `NgTempusdominusBootstrap`, `NgTempusdominusBootstrapInput`, and `NgTempusdominusBootstrapToggle`)
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
* Input Only: (use: `NgTempusdominusBootstrapInput` only)
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
 * [browse our example code](./demo/src/app/) with bootstrap 4
 * Check the branch `bootstrap-3` for bootstrap 3 sources