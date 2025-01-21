import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ZenedobozPage } from './zenedoboz.page';
import { ZenedobozPageRoutingModule } from './zenedoboz-routing.module';
import { MusicPlayerComponent } from "../../../components/music-player/music-player.component";
import { NavigationBarComponent } from "../../../components/navigation-bar/navigation-bar.component";



@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    ZenedobozPageRoutingModule,
    MusicPlayerComponent,
    NavigationBarComponent
],
    declarations: [ZenedobozPage],
})
export class ZenedobozPageModule {
}
