import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {MainPageRoutingModule} from './main-routing.module';

import {MainPage} from './main.page';
import { NavigationBarComponent } from "../../../components/navigation-bar/navigation-bar.component";
import { ConnectButtonComponent } from "../../../components/connect-button/connect-button.component";

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    MainPageRoutingModule,
    NavigationBarComponent,
    ConnectButtonComponent
],
    declarations: [MainPage],
})
export class MainPageModule {
}
