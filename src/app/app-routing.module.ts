import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'mundos',
    loadChildren: () => import('./pages/mundos/mundos.module').then( m => m.MundosPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'detalle-personaje/:id',
    loadChildren: () => import('./pages/detalle-personaje/detalle-personaje.module').then( m => m.DetallePersonajePageModule)
  },
  {
    path: 'detalle-libro/:id',
    loadChildren: () => import('./pages/detalle-libro/detalle-libro.module').then( m => m.DetalleLibroPageModule)
  },
  {
    path: 'detalle-mundo/:id',
    loadChildren: () => import('./pages/detalle-mundo/detalle-mundo.module').then( m => m.DetalleMundoPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
