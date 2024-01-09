import { Component, OnInit } from '@angular/core';
import { ReparacionService } from '../Services/reparaciones.service';
import { ActivatedRoute } from '@angular/router';
import { Reparacion } from '../Models/reparacion.model';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css']
})
export class ReparacionesComponent implements OnInit{
  telefonoId: number;
  reparaciones: Reparacion[] = [];

  constructor(
    private route: ActivatedRoute,
    private reparacionService: ReparacionService
  ) { this.telefonoId=0;}

  ngOnInit(): void {
    this.obtenerTelefonoId();
    this.obtenerReparaciones();
  }

  obtenerTelefonoId(): void {
    this.route.params.subscribe(params => {
      this.telefonoId = +params['telefonoId'];
    });
  }

  obtenerReparaciones(): void {
    this.reparacionService.obtenerReparacionesPorTelefono(this.telefonoId).subscribe(
      (reparaciones: Reparacion[]) => {
        this.reparaciones = reparaciones;
      },
      error => {
        console.error('Error al obtener reparaciones:', error);
      }
    );
  }

}
