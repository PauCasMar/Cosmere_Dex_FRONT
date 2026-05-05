import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MundosService } from '../../servicios/mundos.service';
import { Mundo } from '../../models/mundo';

@Component({
  selector: 'app-mundos',
  templateUrl: './mundos.page.html',
  styleUrls: ['./mundos.page.scss'],
  standalone:false
})
export class MundosPage implements OnInit {

  mundos: Mundo[] = [];
  cargando = true;

   constructor(
    private router: Router,
    private mundosService: MundosService
  ) {}

 ngOnInit() {
    this.mundosService.getMundos().subscribe({
      next: (data) => {
        this.mundos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando mundos:', err);
        this.cargando = false;
      }
    });
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle-mundo', id]);
  }

  getPlanetGradient(id: string) {
    const colors: any = {
      'world_roshar': 'radial-gradient(circle at 30% 30%, #5dade2, #1a1e24)',
      'world_scadrial': 'radial-gradient(circle at 30% 30%, #a0a0a0, #1a1e24)',
      'world_nalthis': 'radial-gradient(circle at 30% 30%, #7d3cff, #1a1e24)'
    };
    return colors[id] || '#ccc';
  }

  getPeligroColor(peligro: string) {
    if (peligro === 'Alto') return 'danger';
    if (peligro === 'Medio') return 'warning';
    return 'success';
  }
}


