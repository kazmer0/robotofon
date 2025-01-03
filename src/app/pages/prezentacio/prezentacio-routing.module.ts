import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PrezentacioPage} from './prezentacio.page';

const routes: Routes = [
    {
        path: '',
        component: PrezentacioPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrezentacioPageRoutingModule {
}
