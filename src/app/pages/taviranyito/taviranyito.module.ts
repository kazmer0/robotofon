import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TaviranyitoPageRoutingModule } from './taviranyito-routing.module';
import { TaviranyitoPage } from './taviranyito.page';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TaviranyitoPageRoutingModule
    ],
    declarations: [TaviranyitoPage],
})
export class TaviranyitoPageModule {
}
