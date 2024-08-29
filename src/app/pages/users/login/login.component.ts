import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  images = [
    'assets/Artboard1_0_25x.webp',
    'assets/batch-by-wisconsin-hemp-scientific-MoosTiMVbug-unsplash.webp',
  ];
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  errorMessage: string = ''; // To display error message on login failure

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value || '';
      const password = this.loginForm.get('password')!.value || '';

      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.errorMessage = 'Invalid username or password';
          console.error('Error logging in:', error);
        },
      });
    }
  }
}
