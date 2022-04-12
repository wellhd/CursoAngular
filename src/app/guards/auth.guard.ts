import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.loginService.readToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
