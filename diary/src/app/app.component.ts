import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MenuBarComponent} from './menu-bar/menu-bar.component'
import {TituloComponent} from './titulo/titulo.component'
import {BigCardComponent} from './big-card/big-card.component'
import {SmallCardComponent} from './small-card/small-card.component'
import {TudoComponent} from './tudo/tudo.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TituloComponent,MenuBarComponent,BigCardComponent,SmallCardComponent,TudoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diary';
}
