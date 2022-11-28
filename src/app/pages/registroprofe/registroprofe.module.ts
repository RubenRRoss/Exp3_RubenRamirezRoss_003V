import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroProfePageRoutingModule } from './registroprofe-routing.module';

import { RegistroProfePage } from './registroProfe.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    RegistroProfePageRoutingModule
  ],
  declarations: [RegistroProfePage]
})
export class RegistroProfePageModule {}
