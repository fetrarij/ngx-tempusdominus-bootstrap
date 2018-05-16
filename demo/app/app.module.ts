import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTempusdominusBootstrapModule } from '../../src/ng-tempusdominus-bootstrap.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgTempusdominusBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
