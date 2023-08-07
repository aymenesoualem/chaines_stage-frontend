import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {Chaine} from "../model/chaine.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ChaineServiceService} from "../services/chaine.service.service";
import {Router} from "@angular/router";
import {Chain} from "@angular/compiler";

@Component({
  selector: 'app-chaines',
  templateUrl: './chaines.component.html',
  styleUrls: ['./chaines.component.css']
})
export class ChainesComponent implements OnInit {

  chaines! : Observable<Array<Chaine>>;
  errorMessage! : object;
  searchFormGroup! : FormGroup;
  currentPage = 1;
  pageSize = 10;
  constructor(private chaineService : ChaineServiceService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      name : this.fb.control("")
    })
    this.handleSearchChaines();
  }

  handleSearchChaines() {
    let name = this.searchFormGroup.value.name;
    this.chaines=this.chaineService.searchChaines(name).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    )
  }
  handleChaine(chaine: Chaine) {
    this.router.navigateByUrl("/chaine/" + chaine.id, {state: chaine});

  }
    handleDeleteChaine(c : Chaine) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.chaineService.deleteChaine(c.id).subscribe({
      next : (resp) => {
        this.chaines = this.chaines.pipe(
          map(data => {
            let index = data.indexOf(c);
            data.slice(index,1)
            return data;
          })
        )
      }, error : err => {
        console.log(err)
      }
    })
  }



  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    // Call the method to fetch data for the new page
    this.handleSearchChaines();
  }


}
