import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';


@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // core & shared
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
