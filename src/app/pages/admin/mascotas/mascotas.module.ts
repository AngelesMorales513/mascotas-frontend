import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasComponent } from './mascotas.component';
import { MaterialModule } from '@app/material.modules';


@NgModule({
  declarations: [
    MascotasComponent
  ],
  imports: [
    MascotasRoutingModule,
    MaterialModule, 
    ReactiveFormsModule
  ]
})
export class MascotasModule { }
