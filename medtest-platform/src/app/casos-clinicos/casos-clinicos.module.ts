import { SharedModule } from './../shared/shared.module';
import { CasosClinicosRoutingModule } from './casos-clinicos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCasosClinicosComponent } from './formulario-casos-clinicos/formulario-casos-clinicos.component';
import { ListagemCasosClinicosComponent } from './listagem-casos-clinicos/listagem-casos-clinicos.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioCasosClinicosComponent,
    ListagemCasosClinicosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CasosClinicosRoutingModule,
    SharedModule,
    MatInputModule,
    MatIconModule
  ]
})
export class CasosClinicosModule { }

