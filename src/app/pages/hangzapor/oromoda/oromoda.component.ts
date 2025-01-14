import { AfterViewInit, Component } from '@angular/core';
import { HangzaporJatekComponent } from "../../../../components/hangzapor-jatek/hangzapor-jatek.component";
import { HangzaporService } from '../../../services/hangzapor.service';

@Component({
  selector: 'app-oromoda',
  standalone: true,
  imports: [HangzaporJatekComponent],
  templateUrl: './oromoda.component.html',
  styleUrl: './oromoda.component.scss'
})
export class OromodaComponent implements AfterViewInit{

  constructor(public hangzapor:HangzaporService){}

  ngAfterViewInit(): void {
    this.hangzapor.loadMusic('oromoda');
  }
}
