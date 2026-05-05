import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MundosService } from '../../servicios/mundos.service';
import { Mundo } from '../../models/mundo';

@Component({
  selector: 'app-detalle-mundo',
  templateUrl: './detalle-mundo.page.html',
  styleUrls: ['./detalle-mundo.page.scss'],
  standalone: false
})
export class DetalleMundoPage implements OnInit {

  mundo: Mundo | null = null;
  cargando = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mundosService: MundosService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mundosService.getMundo(Number(id)).subscribe({
        next: (data) => {
          this.mundo = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error cargando mundo:', err);
          this.cargando = false;
        }
      });
    }
  }

  volver() {
    this.router.navigate(['/mundos']);
  }

  irALibro(idLibro: number) {
    this.router.navigate(['/detalle-libro', idLibro]);
  }

  irAPersonaje(idPersonaje: number) {
    this.router.navigate(['/detalle-personaje', idPersonaje]);
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