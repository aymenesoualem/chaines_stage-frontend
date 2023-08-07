import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChaineServiceService } from '../services/chaine.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
})
export class PathComponent implements OnInit {
  pathFormGroup!: FormGroup;



  constructor(
    private fb: FormBuilder,
    private chaineService: ChaineServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pathFormGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(2)]),
    });

  }



  handlePath() {
    const newPath: string = this.pathFormGroup.get('name')?.value;
    this.chaineService.setPath(newPath).subscribe({
      next: (data) => {
        alert(newPath + ' est le chemin de vos scripts et chaines!');
        this.router.navigateByUrl('/home');
      },
    });
  }
}
