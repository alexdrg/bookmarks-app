import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { WidgetsModule } from './components/widgets/widgets.module';
import { NgrxModule } from './modules/ngrx.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    WidgetsModule,
    NgrxModule,
    HttpClientModule,
  ],
  exports: [
    MaterialModule,
    WidgetsModule,
    NgrxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
