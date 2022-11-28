import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroProfePage } from './registroProfe.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroProfePageRoutingModule {}
