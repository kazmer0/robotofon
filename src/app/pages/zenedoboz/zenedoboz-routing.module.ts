import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ZenedobozPage } from './zenedoboz.page';

const routes: Routes = [
    {
        path: '',
        component: ZenedobozPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ZenedobozPageRoutingModule {
}
