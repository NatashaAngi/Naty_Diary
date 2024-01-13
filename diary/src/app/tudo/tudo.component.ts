import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import {TituloComponent} from '../titulo/titulo.component'
import {BigCardComponent} from '../big-card/big-card.component'
import {SmallCardComponent} from '../small-card/small-card.component'
@Component({
  selector: 'app-tudo',
  standalone: true,
  imports: [MenuBarComponent,TituloComponent,BigCardComponent,SmallCardComponent],
  templateUrl: './tudo.component.html',
  styleUrl: './tudo.component.css'
})
export class TudoComponent {

}
