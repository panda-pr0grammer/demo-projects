import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } 
        from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




