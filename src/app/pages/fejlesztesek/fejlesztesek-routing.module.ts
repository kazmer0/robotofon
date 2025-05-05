import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { FejlesztesekPage } from './fejlesztesek.page';

const routes: Routes = [
    {
        path: '',
        component: FejlesztesekPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FejlesztesekPageRoutingModule {
}
