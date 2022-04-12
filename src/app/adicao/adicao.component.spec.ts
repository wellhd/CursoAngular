import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NaveComponent } from '../nave/nave.component';


import { AdicaoComponent } from './adicao.component';

describe('AdicaoComponent', () => {
  let component: AdicaoComponent;
  let fixture: ComponentFixture<AdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicaoComponent, NaveComponent],
      imports: [MatIconModule, MatToolbarModule, BrowserAnimationsModule, FormsModule, MatFormFieldModule, MatInputModule, RouterModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  describe('#calcularSoma', () => {
    it('should add value1 and value2', () => {
      component.value1 = 10;
      component.value2 = 11;

      component.calcularSoma();

      expect(component.valorTotal).toEqual(21);
    });

  // describe('#clear', () => {
  //   it('should clear the valorTotal', () => {
  //     component.value1 = 10;
  //     component.value2 = 10;
  //     component.valorTotal = 20;

  //     component.clear();
  //     expect(component.value1).toBeUndefined();
  //     expect(component.value2).toBeUndefined();
  //     expect(component.valorTotal).toBeUndefined();
  //   });

    // it('should be flase', () => {
    //   component.isActive = true;
    //   component.change();
    //   expect(component.isActive).toBeFalse();
    // });
   });
});
