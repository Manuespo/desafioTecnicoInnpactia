import { Component } from '@angular/core';
import { Telefono } from '../Models/telefono.model';
import { ActivatedRoute } from '@angular/router';
import { TelefonoService } from '../Services/telefonos.service';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.component.html',
  styleUrls: ['./telefonos.component.css']
})
export class TelefonosComponent {
  clienteId: number;
  telefonos: Telefono[] = [];

  constructor(
    private route: ActivatedRoute,
    private telefonoService: TelefonoService
  ) { this.clienteId = 0;}

  ngOnInit(): void {
    this.obtenerClienteId();
    this.obtenerTelefonos();
  }

  obtenerClienteId(): void {
    this.route.params.subscribe(params => {
      this.clienteId = +params['clienteId'];
    });
  }

  obtenerTelefonos(): void {
    this.telefonoService.obtenerTelefonosPorCliente(this.clienteId).subscribe(
      (telefonos: Telefono[]) => {
        this.telefonos = telefonos;
      },
      error => {
        console.error('Error al obtener teléfonos:', error);
      }
    );
  }

}
