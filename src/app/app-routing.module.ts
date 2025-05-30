import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
},
{
  path: 'hangzapor',
  loadChildren: () => import('./pages/hangzapor/hangzapor.module').then(m => m.HangzaporPageModule),
},
{
  path: 'prezentacio',
  loadChildren: () => import('./pages/prezentacio/prezentacio.module').then(m => m.PrezentacioPageModule)
},
{
  path: 'taviranyito',
  loadChildren: () => import('./pages/taviranyito/taviranyito.module').then(m => m.TaviranyitoPageModule)
},
{
  path: 'zenedoboz',
  loadChildren: () => import('./pages/zenedoboz/zenedoboz.module').then(m => m.ZenedobozPageModule)
},
{
  path: 'fejlesztesek',
  loadChildren: () => import('./pages/fejlesztesek/fejlesztesek.module').then(m => m.FejlesztesekPageModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
