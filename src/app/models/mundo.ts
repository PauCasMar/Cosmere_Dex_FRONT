import { Libro } from './libro';
import { Personaje } from './personaje';

export interface Mundo {
  id_mundo: number;
  nombre: string;
  descripcion?: string;
  imagen_url?: string; 
  libros?: Libro[];
  personajes?: Personaje[];
}