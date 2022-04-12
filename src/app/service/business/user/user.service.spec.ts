import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdicaoComponent } from 'src/app/adicao/adicao.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { NaveComponent } from 'src/app/nave/nave.component';
import { UsersComponent } from 'src/app/users/users.component';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  AppComponent,
        LoginComponent,
        AdicaoComponent,
        UsersComponent,
        HomeComponent,
        NaveComponent ],
      imports: [HttpClientTestingModule, MatFormFieldModule, MatToolbarModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
