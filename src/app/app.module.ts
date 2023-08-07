import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ChainesComponent } from './chaines/chaines.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { NewChaineComponent } from './new-chaine/new-chaine.component';
import { ChaineComponent } from './chaine/chaine.component';
import { ScriptComponent } from './script/script.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PathComponent } from './path/path.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ChainesComponent,
    ScriptsComponent,
    NewChaineComponent,
    ChaineComponent,
    ScriptComponent,
    PathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
