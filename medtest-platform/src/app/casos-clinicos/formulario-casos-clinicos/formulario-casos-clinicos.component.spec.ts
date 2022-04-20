import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCasosClinicosComponent } from './formulario-casos-clinicos.component';

describe('FormularioCasosClinicosComponent', () => {
  let component: FormularioCasosClinicosComponent;
  let fixture: ComponentFixture<FormularioCasosClinicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCasosClinicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCasosClinicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
