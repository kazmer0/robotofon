import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ZenedobozPage } from './zenedoboz.page';
import { ZenedobozPageRoutingModule } from './zenedoboz-routing.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
      ZenedobozPageRoutingModule
    ],
    declarations: [ZenedobozPage],
})
export class ZenedobozPageModule {
}
