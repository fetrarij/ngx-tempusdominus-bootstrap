import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    NgTempusdominusBootstrapDirective,
    NgTempusdominusBootstrapToggleDirective,
    NgTempusdominusBootstrapInputDirective
} from './ng-tempusdominus-bootstrap.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        NgTempusdominusBootstrapDirective,
        NgTempusdominusBootstrapToggleDirective,
        NgTempusdominusBootstrapInputDirective
    ],
    exports: [
        NgTempusdominusBootstrapDirective,
        NgTempusdominusBootstrapToggleDirective,
        NgTempusdominusBootstrapInputDirective
    ]
})
export class NgTempusdominusBootstrapModule {
}
