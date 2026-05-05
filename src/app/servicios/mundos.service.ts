import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mundo } from '../models/mundo';

@Injectable({ providedIn: 'root' })
export class MundosService {

  private apiUrl = 'http://localhost:3000/api/cosmere/mundos';

  constructor(private http: HttpClient) {}

  getMundos(): Observable<Mundo[]> {
    return this.http.get<Mundo[]>(this.apiUrl);
  }

  getMundo(id: number): Observable<Mundo> {
    return this.http.get<Mundo>(`${this.apiUrl}/${id}`);
  }
}