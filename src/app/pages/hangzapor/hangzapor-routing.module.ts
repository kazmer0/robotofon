import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HangzaporPage} from './hangzapor.page';

const routes: Routes = [
    {
        path: '',
        component: HangzaporPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HangzaporPageRoutingModule {
}
