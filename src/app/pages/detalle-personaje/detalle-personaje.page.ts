import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../servicios/personajes.service';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
  standalone: false
})
export class DetallePersonajePage implements OnInit {

  personaje: Personaje | null = null;
  cargando = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personajesService: PersonajesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personajesService.getPersonaje(Number(id)).subscribe({
        next: (data) => {
          this.personaje = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error cargando personaje:', err);
          this.cargando = false;
        }
      });
    }
  }

  volver() {
    this.router.navigate(['/personajes']);
  }

  irALibro(idLibro: number) {
    this.router.navigate(['/detalle-libro', idLibro]);
  }

  irAMundo(idMundo: number) {
  this.router.navigate(['/detalle-mundo', idMundo]);
}

  onImageError(event: any) {
    event.target.style.display = 'none';
  }

  getRolColor(rol: string): string {
    switch (rol) {
      case 'heroe': return '#c9a84c';
      case 'villano': return '#a83232';
      default: return '#a09070';
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
}