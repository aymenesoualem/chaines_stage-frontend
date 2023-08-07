import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Chaine} from "../model/chaine.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ChaineServiceService} from "../services/chaine.service.service";
import {Router} from "@angular/router";
import {Script} from "../model/script.model";

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent implements OnInit {

  scripts!: Observable<Array<Script>>;
  errorMessage!: object;
  searchFormGroup!: FormGroup;
  currentPage = 1; // Current page number
  pageSize = 10;

  constructor(private chaineService: ChaineServiceService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      name: this.fb.control("")
    })
    this.handleSearchScripts();
  }

  handleSearchScripts() {
    let name = this.searchFormGroup.value.name;
    this.scripts = this.chaineService.searchScripts(name).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    )
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    // Call the method to fetch data for the new page
    this.handleSearchScripts();
  }




}
