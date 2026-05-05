export interface PersonajeResumen {
  id_personaje: number;
  nombre: string;
  imagen_url: string;
  importancia: string;
  rol: string;
}

export interface Libro {
  id_libro: number;
  titulo: string;
  saga: string;
  portada: string;
  sinopsis: string;
  anio_publicacion: number;
  numero_paginas: number;
  id_mundo: number;
  nombre_mundo: string;
  personajes?: PersonajeResumen[];
}