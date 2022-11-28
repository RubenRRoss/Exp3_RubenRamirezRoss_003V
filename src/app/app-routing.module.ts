import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './noingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'loginProfe',
    loadChildren: () => import('./pages/loginProfe/loginProfe.module').then( m => m.LoginProfePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
    {
    path: 'generaQR',
    loadChildren: () => import('./pages/generaQR/generaQR.module').then( m => m.GeneraQRPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'elegir',
    loadChildren: () => import('./pages/elegir/elegir.module').then( m => m.ElegirPageModule),
    canActivate: [NoIngresadoGuard]
  },

  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registroprofe',
    loadChildren: () => import('./pages/registroprofe/registroprofe.module').then( m => m.RegistroProfePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'loginAlumno',
    loadChildren: () => import('./pages/loginAlumno/loginAlumno.module').then( m => m.LoginAlumnoPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'perfilalumno',
    loadChildren: () => import('./pages/perfilalumno/perfilalumno.module').then( m => m.PerfilalumnoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfilprofe',
    loadChildren: () => import('./pages/perfilprofe/perfilprofe.module').then( m => m.PerfilprofePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'apiferiados',
    loadChildren: () => import('./pages/apiferiados/apiferiados.module').then( m => m.ApiferiadosPageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
