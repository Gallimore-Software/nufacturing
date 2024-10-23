import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/infrastructure/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Import for error typing

// Define an interface for the registration data
interface RegisterData {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  department: string;
  phoneNumber: string;
  status?: string; // Optional field
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initRegisterForm();
  }

  // Initialize the form with validation
  private initRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ], // Simple phone validation for 10 digits
      status: [''], // Optional field
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const registerData: RegisterData = this.registerForm.value; // Now strongly typed
    console.log('Submitting Registration Data:', registerData);

    this.authService.registerUser(registerData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']); // Navigate to login page after successful registration
      },
      (error: HttpErrorResponse) => {
        // Now typed as HttpErrorResponse
        this.handleRegistrationError(error);
      }
    );
  }

  // Handle Microsoft login (if needed)
  onMicrosoftLogin(): void {
    console.log('Microsoft login initiated');
  }

  // Handle registration error
  private handleRegistrationError(error: HttpErrorResponse): void {
    // Now typed
    this.errorMessage = 'Registration failed. Please try again.';
    console.error('Registration Error:', error);
  }
}
