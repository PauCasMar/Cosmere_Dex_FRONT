import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedaService, ResultadosBusqueda } from '../../servicios/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: false
})
export class BusquedaPage implements OnInit {

  termino: string = '';
  resultados: ResultadosBusqueda = { libros: [], personajes: [], mundos: [] };
  cargando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busquedaService: BusquedaService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.termino = params['q'] || '';
      if (this.termino) this.realizarBusqueda();
    });
  }

  realizarBusqueda() {
    this.cargando = true;
    this.busquedaService.buscar(this.termino).subscribe({
      next: (data) => {
        this.resultados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error búsqueda:', err);
        this.cargando = false;
      }
    });
  }

  irALibro(id: number) { this.router.navigate(['/detalle-libro', id]); }
  irAPersonaje(id: number) { this.router.navigate(['/detalle-personaje', id]); }
  irAMundo(id: number) { this.router.navigate(['/detalle-mundo', id]); }

  totalResultados(): number {
    return this.resultados.libros.length
         + this.resultados.personajes.length
         + this.resultados.mundos.length;
  }

  getRolColor(rol: string): string {
    switch (rol) {
      case 'heroe': return '#c9a84c';
      case 'villano': return '#a83232';
      default: return '#a09070';
    }
  }

  onImageError(event: any) {
    event.target.style.display = 'none';
  }
}
