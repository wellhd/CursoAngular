import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AdicaoComponent } from '../adicao/adicao.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { NaveComponent } from '../nave/nave.component';
import { UsersComponent } from '../users/users.component';

import { AuthGuard } from './auth.guard';

describe('AutorizacaoService', () => {
  let service: AuthGuard;

  beforeEach(async () => {
    TestBed.configureTestingModule({

      declarations: [  AppComponent,
        LoginComponent,
        AdicaoComponent,
        UsersComponent,
        HomeComponent,
        NaveComponent ],

      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatCardModule,

      ],


    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
