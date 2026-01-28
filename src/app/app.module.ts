import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { RangeComponent } from './components/range/range.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './pages/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RangeComponent,
    HomeComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
