import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from '../../servicios/personajes.service';
import { Personaje, Rol } from '../../models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: false
})
export class PersonajesPage implements OnInit {

  personajes: Personaje[] = [];
  personajesFiltrados: Personaje[] = [];
  cargando = true;
  filtroRol: Rol | 'todos' = 'todos';
  textoBusqueda = '';

  constructor(
    private router: Router,
    private personajesService: PersonajesService
  ) {}

  ngOnInit() {
    this.personajesService.getPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
        this.personajesFiltrados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando personajes:', err);
        this.cargando = false;
      }
    });
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle-personaje', id]);
  }

  buscar(event: any) {
    this.textoBusqueda = (event.target.value || '').toLowerCase();
    this.aplicarFiltros();
  }

  cambiarFiltroRol(rol: Rol | 'todos') {
    this.filtroRol = rol;
    this.aplicarFiltros();
  }

  private aplicarFiltros() {
    this.personajesFiltrados = this.personajes.filter(p => {
      const coincideRol = this.filtroRol === 'todos' || p.rol === this.filtroRol;
      const coincideTexto = !this.textoBusqueda ||
        p.nombre.toLowerCase().includes(this.textoBusqueda) ||
        (p.libro_titulo?.toLowerCase().includes(this.textoBusqueda) ?? false);
      return coincideRol && coincideTexto;
    });
  }

  getRolColor(rol: string): string {
    switch (rol) {
      case 'heroe': return '#c9a84c';
      case 'villano': return '#a83232';
      default: return '#a09070'; // neutral
    }
  }

  getRolLabel(rol: string): string {
    switch (rol) {
      case 'heroe': return 'Héroe';
      case 'villano': return 'Villano';
      default: return 'Neutral';
    }
  }

  getImportanciaLabel(imp: string): string {
    switch (imp) {
      case 'protagonista': return 'Protagonista';
      case 'personaje secundario': return 'Secundario';
      case 'personaje no importante': return 'Menor';
      default: return imp;
    }
  }

  getImportanciaIcon(imp: string): string {
    switch (imp) {
      case 'protagonista': return 'star';
      case 'personaje secundario': return 'star-half';
      default: return 'star-outline';
    }
  }

  onImageError(event: any) {
    event.target.style.display = 'none';
  }
}