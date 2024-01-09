import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  crearCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}