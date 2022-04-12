import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginReponse> {
    return this.http.post<LoginReponse>('https://reqres.in/api/login', {
      email,
      password,
    });
  }
  persistTokein(token: string): void {
    localStorage.setItem('auth-token', token);
  }
  readToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  clearToken(): void {
    localStorage.removeItem('auth-token');
  }
}

export interface LoginReponse {
  token: string;
}
