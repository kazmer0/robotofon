
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { FejlesztesekPageRoutingModule } from './fejlesztesek-routing.module';
import { FejlesztesekPage } from './fejlesztesek.page';
import { NavigationBarComponent } from "../../../components/navigation-bar/navigation-bar.component";
import { HeaderComponent } from "../../../components/header/header.component";



@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    FejlesztesekPageRoutingModule,
    NavigationBarComponent,
    HeaderComponent
],
    declarations: [FejlesztesekPage],
})
export class FejlesztesekPageModule {
}
