import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:false
})
export class MenuComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  // Función para saber qué pestaña está activa y cambiarle el color
  isActive(ruta: string): boolean {
    return this.router.url.includes(ruta);
  }

}
