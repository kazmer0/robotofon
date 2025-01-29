import { AfterViewInit, Component } from '@angular/core';
import { HangzaporJatekComponent } from "../../../../components/hangzapor-jatek/hangzapor-jatek.component";
import { HangzaporService } from '../../../services/hangzapor.service';
import { NavigationBarComponent } from "../../../../components/navigation-bar/navigation-bar.component";
import { HeaderComponent } from "../../../../components/header/header.component";

@Component({
  selector: 'app-oromoda',
  standalone: true,
  imports: [HangzaporJatekComponent, HeaderComponent],
  templateUrl: './oromoda.component.html',
  styleUrl: './oromoda.component.scss'
})
export class OromodaComponent implements AfterViewInit{

  constructor(public hangzapor:HangzaporService){}

  ngAfterViewInit(): void {
    this.hangzapor.loadMusic('oromoda');
  }
}
