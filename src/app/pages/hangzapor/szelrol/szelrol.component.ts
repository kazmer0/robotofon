import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HangzaporJatekComponent } from '../../../../components/hangzapor-jatek/hangzapor-jatek.component';
import { HangzaporService } from '../../../services/hangzapor.service';
import { NavigationBarComponent } from "../../../../components/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-szelrol',
  standalone: true,
  imports: [HangzaporJatekComponent, NavigationBarComponent],
  templateUrl: './szelrol.component.html',
  styleUrl: './szelrol.component.scss'
})
export class SzelrolComponent implements OnInit{

  constructor(public hangapor:HangzaporService){}

  ngOnInit(): void {
    this.hangapor.loadMusic('szelrol')
  }
}
