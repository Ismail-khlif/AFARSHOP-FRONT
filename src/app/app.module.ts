import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitakonModule } from './Bitakon/bitakon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BitakonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
