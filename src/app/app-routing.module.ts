import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ScriptsComponent} from "./scripts/scripts.component";
import {ChainesComponent} from "./chaines/chaines.component";
import {NewChaineComponent} from "./new-chaine/new-chaine.component";
import {ChaineComponent} from "./chaine/chaine.component";
import {ScriptComponent} from "./script/script.component";
import {PathComponent} from "./path/path.component";


const routes: Routes = [
  {path: "home", component :HomeComponent},
  {path:"scripts",component:ScriptsComponent},
  {path:"chaines",component:ChainesComponent},
  {path:"new-chaine",component:NewChaineComponent},
  { path :"home", component : HomeComponent},
  { path :"", component : HomeComponent},
  {path:"chaine/:id",component:ChaineComponent},
  {path:"script/:id",component:ScriptComponent},
  {path:"path",component:PathComponent}



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
