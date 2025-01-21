import { AfterViewInit, Component } from '@angular/core';
import { HangzaporJatekComponent } from "../../../../components/hangzapor-jatek/hangzapor-jatek.component";
import { HangzaporService } from '../../../services/hangzapor.service';
import { NavigationBarComponent } from "../../../../components/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-boci',
  standalone: true,
  imports: [HangzaporJatekComponent, NavigationBarComponent],
  templateUrl: './boci.component.html',
  styleUrl: './boci.component.scss'
})
export class BociComponent implements AfterViewInit {

  constructor(public hangzapor:HangzaporService){}

  ngAfterViewInit(): void {
    this.hangzapor.loadMusic('boci');
  }
}
