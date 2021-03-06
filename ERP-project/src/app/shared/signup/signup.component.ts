import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../shared/models/candidat.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpError: any;
  signupForm = new FormGroup({
    entrepriseName: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,}'
      ),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', Validators.required),
  });

  get entrepriseName() {
    return this.signupForm.get('entrepriseName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  register() {
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    const dataTosend = {
      ...this.signupForm.value,
      username: this.entrepriseName.value,
    };
    this.accountService
      .register(dataTosend)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/entreprise'], { relativeTo: this.route });
        },
        error: (error) => {
          debugger;
          if (error.error.username[0]) {
            this.signUpError = error.error.username[0];
          }
        },
      });
  }
}
