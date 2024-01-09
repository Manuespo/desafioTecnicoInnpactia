import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { TelefonosComponent } from './telefonos/telefonos.component';
import { ReparacionesComponent } from './reparaciones/reparaciones.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { NuevoTelefonoComponent } from './nuevo-telefono/nuevo-telefono.component';
import { NuevaReparacionComponent } from './nueva-reparacion/nueva-reparacion.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'telefonos/:clienteId', component: TelefonosComponent },
  { path: 'reparaciones/:telefonoId', component: ReparacionesComponent },
  { path: 'nuevo-cliente', component: NuevoClienteComponent },
  { path: 'nuevo-telefono/:clienteId', component: NuevoTelefonoComponent },
  { path: 'nueva-reparacion/:telefonoId', component: NuevaReparacionComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
