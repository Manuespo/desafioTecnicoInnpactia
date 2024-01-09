import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reparacion } from '../Models/reparacion.model';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {
  private apiUrl = 'http://localhost:3000/api/reparaciones'; // Ajusta la URL según la configuración de tu backend

  constructor(private http: HttpClient) { }

  obtenerReparacionesPorTelefono(telefonoId: number): Observable<Reparacion[]> {
    const url = `${this.apiUrl}/telefono/${telefonoId}`;
    return this.http.get<Reparacion[]>(url);
  }
  crearReparacion(reparacion: Reparacion): Observable<any> {
    return this.http.post(this.apiUrl, reparacion);
  }
}
