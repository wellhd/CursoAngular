import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginReponse, LoginService } from './../service/login.service';
import { of } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { Router, Routes } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let template: HTMLElement;
  let mocKLoginService: jasmine.SpyObj<LoginService>;
  let mocKRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mocKLoginService = jasmine.createSpyObj('mocKLoginService', [
      'login',
      'persistTokein',
    ]);
    mocKRouter = jasmine.createSpyObj('mocKRouter', ['navigate']);

    const Routes = [
      {
        path: 'home',
        component: HomeComponent,
      },
    ];

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatToolbarModule,
      ],

      providers: [
        { provide: LoginService, useValue: mocKLoginService },
        { provide: Router, useValue: mocKRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('#onSubmit', () => {
    describe('when form is valid', () => {
      beforeEach(() => {
        //given
        const fakeLoginResponse: LoginReponse = { token: 'qwerty' };
        mocKLoginService.login.and.returnValue(of(fakeLoginResponse));

        const email = 'email';
        const password = 'password';

        component.form.controls[email].setErrors(null);
        component.form.controls[password].setErrors(null);
      });

      it('should update login button message', () => {});

      it('should call LoginService.login with email and password from form', () => {
        //given
        component.form.controls['email'].setValue('test@test.com');
        component.form.controls['password'].setValue('123456');

        //When
        component.onSubmit();

        // Then
        expect(mocKLoginService.login).toHaveBeenCalledWith(
          'test@test.com',
          '123456'
        );
      });
      it('should call LoginService.persistTokein', () => {
        //when
        component.onSubmit();

        //then
        expect(mocKLoginService.persistTokein).toHaveBeenCalledWith('qwerty');
      });
      it('should navigate to home', () => {
        //when
        component.onSubmit();

        //then
        expect(mocKRouter.navigate).toHaveBeenCalledWith(['/home']);
      });
    });
  });
});
