import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TelefonosComponent } from './telefonos/telefonos.component';
import { ReparacionesComponent } from './reparaciones/reparaciones.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { NuevoTelefonoComponent } from './nuevo-telefono/nuevo-telefono.component';
import { NuevaReparacionComponent } from './nueva-reparacion/nueva-reparacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    TelefonosComponent,
    ReparacionesComponent,
    NuevoClienteComponent,
    NuevoTelefonoComponent,
    NuevaReparacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
