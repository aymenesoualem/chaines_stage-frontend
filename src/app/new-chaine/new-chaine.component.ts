import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChaineServiceService} from "../services/chaine.service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-chaine',
  templateUrl: './new-chaine.component.html',
  styleUrls: ['./new-chaine.component.css']
})
export class NewChaineComponent implements OnInit{
  newChaineFormGroup! : FormGroup;
  errorMessage! : string;
  constructor(private fb : FormBuilder, private chaineService : ChaineServiceService, private router : Router) { }

  ngOnInit(): void {
    this.newChaineFormGroup = this.fb.group({
      name : this.fb.control(null, [Validators.required , Validators.minLength(4)])
    });


  }
  handleSaveChaine() {
    let chaine : String = this.newChaineFormGroup.value
    this.chaineService.saveChaine(chaine).subscribe({
      next : data => {
        alert("Chaine ajoutée!")

        this.router.navigateByUrl("/chaines")
      }
    })
  }

}
