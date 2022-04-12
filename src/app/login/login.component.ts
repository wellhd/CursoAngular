import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginReponse, LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  loginErrorMessage: string | undefined;
  loginButtonMessage = 'Entrar';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  onSubmit(): void {
    console.log('this.form', this.form);

    if (this.form.invalid) {
      return;
    }
    this.loginButtonMessage = 'Entrando';
    this.loginService
      .login(this.form.value.email, this.form.value.password)
      .subscribe({
        next: (val: LoginReponse) => {
          console.log('val', val);
          this.loginService.persistTokein(val.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.loginErrorMessage = 'Erro ao realizar o login, tente novamente.';
          this.loginButtonMessage = 'Entrar';
        },
      });
  }
}
