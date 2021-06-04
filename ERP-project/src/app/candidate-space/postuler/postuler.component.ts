import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/shared/services/candidate.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css'],
})
export class PostulerComponent implements OnInit {
  submitted = false;
  postuled: any;

  postulerForm = new FormGroup({
    candidatName: new FormControl('', [Validators.required]),
    candidatLastName: new FormControl('', [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    cv: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.postulerForm.get('email');
  }
  get cv() {
    return this.postulerForm.get('cv');
  }
  get candidatName() {
    return this.postulerForm.get('candidatName');
  }
  get candidatLastName() {
    return this.postulerForm.get('candidatLastName');
  }

  constructor(
    private postulerService: CandidateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onPostuler() {
    this.postuled = {
      email: this.email.value,
      cv: this.cv.value,
      candidatName: this.candidatName.value,
      candidatLastName: this.candidatLastName.value,
    };
    const confirmed = confirm('Are you sure !');
    if (confirmed === true) {
      // Send Http request
      this.postulerService
        .onPostule(this.postuled)
        .subscribe((responseData) => {
          console.log(responseData);
        });
      this.router.navigate(['offres']);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.postulerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.postulerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.postulerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.postulerForm.reset();
  }
}
