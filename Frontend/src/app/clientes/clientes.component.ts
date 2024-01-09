import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Models/cliente.model';
import { ClienteService } from '../Services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );}
  }
