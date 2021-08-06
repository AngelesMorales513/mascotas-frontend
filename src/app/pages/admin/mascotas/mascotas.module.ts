import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasComponent } from './mascotas.component';
import { MaterialModule } from '@app/material.modules';


@NgModule({
  declarations: [
    MascotasComponent
  ],
  imports: [
    MascotasRoutingModule,
    MaterialModule
  ]
})
export class MascotasModule { }
