import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { TaviranyitoPage } from './taviranyito.page';

const routes: Routes = [
    {
        path: '',
        component: TaviranyitoPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TaviranyitoPageRoutingModule {
}
