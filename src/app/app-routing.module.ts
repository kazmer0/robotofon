import { HangzaporPage } from './pages/hangzapor/hangzapor.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BociComponent } from './pages/hangzapor/boci/boci.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
