import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HangzaporPageRoutingModule } from './hangzapor-routing.module';
import {HangzaporPage} from './hangzapor.page'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HangzaporPageRoutingModule
    ],
    declarations: [HangzaporPage],
})
export class HangzaporPageModule {
}
