import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    email: new FormControl('', Validators.required),
    cv: new FormControl('', Validators.required),
    acceptTerms: new FormControl(false, Validators.requiredTrue),
  });

  get email() {
    return this.postulerForm.get('email');
  }
  get cv() {
    return this.postulerForm.get('cv');
  }

  constructor(private postulerService: CandidateService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onPostuler() {
    this.postuled = {
      email: this.email.value,
      cv: this.cv.value,
    };
    // Send Http request
    this.postulerService
      .onPostule(this.postuled)
      .subscribe((responseData) => {
        console.log(responseData);
      });
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
