import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTempusdominusBootstrapModule } from '../../../src/ng-tempusdominus-bootstrap.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { InputOnlyComponent } from './input-only/input-only.component';
import { LinkedDatepickersComponent } from './linked-datepickers/linked-datepickers.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    InputOnlyComponent,
    LinkedDatepickersComponent,
    ReactiveFormsComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgTempusdominusBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
