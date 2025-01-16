import { Component, Input } from '@angular/core';
import { ConnectButtonComponent } from "../connect-button/connect-button.component";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [ConnectButtonComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})

export class NavigationBarComponent {
  @Input() styleClass: string = '';

}
