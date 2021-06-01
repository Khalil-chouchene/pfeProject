import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForms = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  get userName() {
    return this.loginForms.get('userName');
  }

  get password() {
    return this.loginForms.get('password');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
