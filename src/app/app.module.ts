import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    DashboardComponent,
    SampleComponent,
    MenuComponent,
    HeroesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
