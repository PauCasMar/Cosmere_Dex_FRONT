import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Personaje } from '../models/personaje';

@Injectable({ providedIn: 'root' })
export class PersonajesService {

  private apiUrl = 'http://localhost:3000/api/cosmere/personajes';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }

  getPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/${id}`);
  }
}