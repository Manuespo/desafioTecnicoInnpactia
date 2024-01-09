import { Injectable } from '@angular/core';
import { Telefono } from '../Models/telefono.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {
  private apiUrl = 'http://localhost:3000/api/phones';

  constructor(private http: HttpClient) { }

  obtenerTelefonosPorCliente(clienteId: number): Observable<Telefono[]> {
    const url = `${this.apiUrl}/cliente/${clienteId}`;
    return this.http.get<Telefono[]>(url);
  }

  crearTelefono(telefono: Telefono): Observable<any> {
    return this.http.post(this.apiUrl, telefono);
  }
  
}