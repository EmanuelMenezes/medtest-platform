import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'casos-clinicos', loadChildren: ()=> import("./casos-clinicos/casos-clinicos.module").then(m=> m.CasosClinicosModule)},
  { path: 'personagens', loadChildren: ()=> import("./personagens/personagens.module").then(m=> m.PersonagensModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
