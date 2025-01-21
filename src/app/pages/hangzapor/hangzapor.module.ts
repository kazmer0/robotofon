import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HangzaporPageRoutingModule } from './hangzapor-routing.module';
import {HangzaporPage} from './hangzapor.page'
import { NavigationBarComponent } from "../../../components/navigation-bar/navigation-bar.component";


@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    HangzaporPageRoutingModule,
    NavigationBarComponent
],
    declarations: [HangzaporPage],
})
export class HangzaporPageModule {
}
