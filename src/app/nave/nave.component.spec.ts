import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NaveComponent } from './nave.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('NaveComponent', () => {
  let component: NaveComponent;
  let fixture: ComponentFixture<NaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaveComponent],
      imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
