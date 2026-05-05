import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from '../../servicios/libros.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
  standalone: false
})
export class LibrosPage implements OnInit {

  libros: Libro[] = [];
  cargando = true;

  constructor(
    private router: Router,
    private librosService: LibrosService
  ) {}

  ngOnInit() {
    this.librosService.getLibros().subscribe({
      next: (data) => {
        this.libros = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando libros:', err);
        this.cargando = false;
      }
    });
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle-libro', id]);
  }

  onImageError(event: any) {
    event.target.src = 'assets/portada-default.png';
  }

}