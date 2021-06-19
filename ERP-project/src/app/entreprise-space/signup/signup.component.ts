import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Entreprise } from './candidat.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    EntrepriseName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    passwordSignup: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  signupPost: Entreprise;

  // tslint:disable-next-line: typedef
  get firstName() {
    return this.signupForm.get('firstName');
  }
  // tslint:disable-next-line: typedef
  get lastName() {
    return this.signupForm.get('lastName');
  }
  // tslint:disable-next-line: typedef
  get email() {
    return this.signupForm.get('email');
  }
  // tslint:disable-next-line: typedef
  get passwordSignup() {
    return this.signupForm.get('signupPassword');
  }
  // tslint:disable-next-line: typedef
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
