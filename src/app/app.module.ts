import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './Component/dynamic-form/dynamic-form.component';
import { ImgFormComponent } from './Component/img-form/img-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    ImgFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
