import { Habilidad } from './habilidad';
import { Mundo } from './mundo';
import { Libro } from './libro';

export type Genero = 'hombre' | 'mujer';
export type Rol = 'villano' | 'heroe' | 'neutral';
export type Importancia = 'protagonista' | 'personaje secundario' | 'personaje no importante';

export interface Personaje {
  id_personaje: number;
  nombre: string;
  id_libro: number;
  genero: Genero;
  imagen_url?: string;
  importancia: Importancia;
  rol: Rol;
  // Campos extra del lista
  libro_titulo?: string;
  // Campos extra del detalle
  libro_principal_titulo?: string;
  habilidades?: Habilidad[];
  mundos?: Mundo[];
  libros?: Libro[];
}