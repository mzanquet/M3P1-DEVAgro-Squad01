import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    HttpClientModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
