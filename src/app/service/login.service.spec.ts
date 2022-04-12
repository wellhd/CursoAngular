/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdicaoComponent } from '../adicao/adicao.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { NaveComponent } from '../nave/nave.component';
import { UsersComponent } from '../users/users.component';
import { LoginService } from './login.service';

describe('Service: Login', () => {
  let service: LoginService;
  let mocKHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mocKHttpClient = jasmine.createSpyObj('mocKHttpClient', ['post']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        AdicaoComponent,
        UsersComponent,
        HomeComponent,
        NaveComponent,
      ],
      imports: [HttpClientTestingModule, MatFormFieldModule, MatToolbarModule],

      providers: [{ provide: HttpClient, useValue: mocKHttpClient }],
    });

    service = TestBed.inject(LoginService);
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  describe('#login', () => {
    it('should call correct endpoint with correct body', () => {
      //Given

      //When
      service.login('test@test.com', '1234');

      //Then
      expect(mocKHttpClient.post).toHaveBeenCalledWith(
        'https://reqres.in/api/login',
        { email: 'test@test.com', password: '1234' }
      );
    });
  });
});
