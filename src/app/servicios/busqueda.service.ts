import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResultadosBusqueda {
  libros: any[];
  personajes: any[];
  mundos: any[];
}

@Injectable({ providedIn: 'root' })
export class BusquedaService {

  private apiUrl = 'http://localhost:3000/api/cosmere/buscar';

  constructor(private http: HttpClient) {}

  buscar(termino: string): Observable<ResultadosBusqueda> {
    return this.http.get<ResultadosBusqueda>(`${this.apiUrl}?q=${encodeURIComponent(termino)}`);
  }
}