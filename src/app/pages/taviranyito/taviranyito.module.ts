import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TaviranyitoPageRoutingModule } from './taviranyito-routing.module';
import { TaviranyitoPage } from './taviranyito.page';
import { NavigationBarComponent } from "../../../components/navigation-bar/navigation-bar.component";



@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    TaviranyitoPageRoutingModule,
    NavigationBarComponent
],
    declarations: [TaviranyitoPage],
})
export class TaviranyitoPageModule {
}
