import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HangzaporPageRoutingModule } from './hangzapor-routing.module';
import {HangzaporPage} from './hangzapor.page'
import { NavigationBarComponent } from "../../../components/navigation-bar/navigation-bar.component";
import { HeaderComponent } from "../../../components/header/header.component";


@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    HangzaporPageRoutingModule,
    NavigationBarComponent,
    HeaderComponent
],
    declarations: [HangzaporPage],
})
export class HangzaporPageModule {
}
