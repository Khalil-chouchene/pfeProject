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
  publicOffres: any;

  postulerForm = new FormGroup({
    candidatName: new FormControl('', [Validators.required]),
    candidatLastName: new FormControl('', [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    cv: new FormControl('', [Validators.required]),
    message: new FormControl(''),
  });
  offreSubmited: boolean; // pour controler button submit

  get email() {
    return this.postulerForm.get('email');
  }
  get cv() {
    return this.postulerForm.get('cv');
  }
  get message() {
    return this.postulerForm.get('message');
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
    const formData = new FormData();

    formData.append('CV', this.cv.value);
    formData.append('offre', this.router.url.split('/')[2]);
    formData.append('email', this.email.value);
    formData.append('message', this.message.value);
    formData.append('nom', this.candidatName.value);
    formData.append('prenom', this.candidatLastName.value);

    // Send Http request
    this.postulerService.onPostule(formData).subscribe((responseData) => {
      this.offreSubmited = true;
      setTimeout(() => {
        this.offreSubmited = false;
        this.router.navigate(['offres']);
      }, 2000);
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.postulerForm.controls;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.postulerForm.patchValue({
        cv: file,
      });
    }
  }

  onReset() {
    this.submitted = false;
    this.postulerForm.reset();
  }
}
