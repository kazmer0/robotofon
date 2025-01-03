import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PrezentacioPageRoutingModule } from './prezentacio-routing.module';
import { PrezentacioPage } from './prezentacio.page';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PrezentacioPageRoutingModule
    ],
    declarations: [PrezentacioPage],
})
export class PrezentacioPageModule {
}
