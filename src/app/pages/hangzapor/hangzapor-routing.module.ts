import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HangzaporPage} from './hangzapor.page';
import { BociComponent } from './boci/boci.component';
import { OromodaComponent } from './oromoda/oromoda.component';
import { SzelrolComponent } from './szelrol/szelrol.component';

const routes: Routes = [
    {
      path: '',
      component: HangzaporPage,
    },
    {
      path: 'boci',
      component: BociComponent,
    },
    {
      path: 'oromoda',
      component:OromodaComponent,
    },
    {
      path: 'szelrol',
      component: SzelrolComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HangzaporPageRoutingModule {
}
