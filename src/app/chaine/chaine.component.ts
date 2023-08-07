import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Chaine} from "../model/chaine.model";
import {ChaineServiceService} from "../services/chaine.service.service";
import {catchError, Observable, of, throwError} from "rxjs";
import { Exec, Fichier, Script} from "../model/script.model";

@Component({
  selector: 'app-chaine',
  templateUrl: './chaine.component.html',
  styleUrls: ['./chaine.component.css']
})
export class ChaineComponent implements OnInit {
  chaine! : Chaine;
  scripts! :Observable<Array<Script>>;

  errorMessage! : object;
  chaineOb!: Observable<Chaine>;
  constructor(private route : ActivatedRoute, private router :Router,private chaineService : ChaineServiceService) {
    this.chaine=this.router.getCurrentNavigation()?.extras.state as Chaine;
    this.scripts = of(this.chaine.scripts);
  }

  ngOnInit(): void {
    this.chaineOb=this.chaineService.getChaine(this.route.snapshot.params['id']).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      }))

  }
  handleScript(script: Script) {
    this.router.navigateByUrl("/script/" + script.id);
  }


}
