import { Routes } from '@angular/router';
import { TudoComponent } from './tudo/tudo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component'
import {TituloComponent} from './titulo/titulo.component'
import {BigCardComponent} from './big-card/big-card.component'
import {SmallCardComponent} from './small-card/small-card.component'
import {FooterComponent} from './footer/footer.component'

export const routes: Routes = 
[{path:'',component:TudoComponent},

{path:'conteudo/:id',component:ConteudoComponent}];
