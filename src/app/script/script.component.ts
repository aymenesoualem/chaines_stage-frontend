import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { Chaine } from '../model/chaine.model';
import { ChaineServiceService } from '../services/chaine.service.service';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Exec, Fichier, Script } from '../model/script.model';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css'],
})
export class ScriptComponent implements OnInit {
  script!: Observable<Script>;

  chaine: Chaine;

  constructor(
    private route: ActivatedRoute,
    private chaineService: ChaineServiceService,
    private router :Router,
    private location: Location
  ) {
    this.script = this.chaineService.getScript(this.route.snapshot.params['id']);

    this.chaine = this.route.snapshot.params['chaine'];
  }

  ngOnInit(): void {}

  handleChaine() {
    // Step 1: Replace the current state to prevent duplicate navigation entries

    // Step 2: Navigate back to the previous page (ChaineComponent)
    this.location.back();
  }
}

