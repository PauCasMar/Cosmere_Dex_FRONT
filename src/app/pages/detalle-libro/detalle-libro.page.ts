import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../../servicios/libros.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.page.html',
  styleUrls: ['./detalle-libro.page.scss'],
  standalone: false
})
export class DetalleLibroPage implements OnInit {

  libro: Libro | null = null;
  cargando = true;
  sinopsisExpandida = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private librosService: LibrosService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.librosService.getLibro(Number(id)).subscribe({
        next: (data) => {
          this.libro = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error cargando libro:', err);
          this.cargando = false;
        }
      });
    }
  }

  volver() {
    this.router.navigate(['/libros']);
  }

  toggleSinopsis() {
    this.sinopsisExpandida = !this.sinopsisExpandida;
  }

  onImageError(event: any) {
    event.target.src = 'assets/portada-default.png';
  }

  getRolColor(rol: string): string {
    switch (rol) {
      case 'heroe': return '#c9a84c';
      case 'villano': return '#a83232';
      default: return '#a09070';
    }
  }
  

  verPersonaje(id: number) {
  this.router.navigate(['/detalle-personaje', id]);
}

  irAMundo(idMundo: number) {
  this.router.navigate(['/detalle-mundo', idMundo]);
}
}
