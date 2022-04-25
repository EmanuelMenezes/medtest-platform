import { FormularioCasosClinicosComponent } from './formulario-casos-clinicos/formulario-casos-clinicos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '',  redirectTo: 'novo'},
  { path: 'novo', component: FormularioCasosClinicosComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosClinicosRoutingModule {}
