import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Chaine} from "../model/chaine.model";
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Script} from "../model/script.model";

@Injectable({
  providedIn: 'root'
})
export class ChaineServiceService {

  constructor(private http:HttpClient) {}
  public getChaines() : Observable<Array<Chaine>> {
      return this.http.get<Array<Chaine>>(environment.backendBase+"/chaines")
    }
  public searchChaines(name : string) : Observable<Array<Chaine>> {
    return this.http.get<Array<Chaine>>(environment.backendBase+"/chaines/search?name="+name)
  }
  public getChaine(id : number) : Observable<Chaine> {
    return this.http.get<Chaine>(environment.backendBase+"/chaines/"+id)
  }

  public getScript(id : number) : Observable<Script> {
    return this.http.get<Script>(environment.backendBase+"/scripts/"+id)
  }
  public saveChaine(chaine: String) : Observable<Chaine> {
    return this.http.post<Chaine>(environment.backendBase+"/chaines/new",chaine).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error);

        alert(error.error.message);

        return throwError(error);
      })
    );
  }
  public setPath(path:String) :Observable<String>{
    return this.http.post<String>(environment.backendBase+"/path/new",path).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error);

        alert(error.error.message);

        return throwError(error);
      })
    );
  }
  public getPath() :Observable<String>{
    return this.http.get<String>(environment.backendBase+"/path")
  }
  public deleteChaine(id : number) : Observable<Chaine> {
    return this.http.delete<Chaine>(environment.backendBase+"/chaine/"+id)
  }


  searchScripts(name : string) : Observable<Array<Script>> {
    return this.http.get<Array<Script>>(environment.backendBase+"/scripts/search?name="+name)
  }

  deleteScript(id : number) : Observable<Chaine> {
    return this.http.delete<Chaine>(environment.backendBase+"/scripts/"+id)
  }
}
