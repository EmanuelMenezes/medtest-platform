import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCasosClinicosComponent } from './formulario-casos-clinicos/formulario-casos-clinicos.component';
import { ListagemCasosClinicosComponent } from './listagem-casos-clinicos/listagem-casos-clinicos.component';



@NgModule({
  declarations: [
    FormularioCasosClinicosComponent,
    ListagemCasosClinicosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CasosClinicosModule { }
