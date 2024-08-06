import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      status: [''],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration Data:', this.registerForm.value);
      // Handle registration logic here
    }
  }
  onMicrosoftLogin() {}
}
