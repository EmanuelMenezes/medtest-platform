import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCasosClinicosComponent } from './listagem-casos-clinicos.component';

describe('ListagemCasosClinicosComponent', () => {
  let component: ListagemCasosClinicosComponent;
  let fixture: ComponentFixture<ListagemCasosClinicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCasosClinicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCasosClinicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
