import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone:false
})
export class CabeceraComponent implements OnInit {
  
  
  @Input() titulo: string = 'Cosmere Dex';
  
  // Emite el texto de búsqueda al componente padre
  @Output() busquedaChange = new EventEmitter<string>();
  
  constructor(private router: Router) { }

  ngOnInit() {}

  onIconClick() {
      this.router.navigate(['/home']);
    }

  buscar(event: any) {
    const termino = (event.target.value || '').trim();
    if (termino.length < 2) return;
    this.router.navigate(['/busqueda'], { queryParams: { q: termino } });
  }
}
