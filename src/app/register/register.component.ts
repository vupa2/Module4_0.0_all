import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { passwordMatchingValidatior } from 'src/app/confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: [
        '',
        [Validators.required, Validators.pattern(/^male$|^female$/)],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
    },
    {
      validators: passwordMatchingValidatior,
    }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get phone() {
    return this.registerForm.get('phone');
  }

  register() {}

  logas() {
    console.log(this.registerForm.errors);
  }
}
