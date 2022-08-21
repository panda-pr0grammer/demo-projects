import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent, BottomSheet } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
