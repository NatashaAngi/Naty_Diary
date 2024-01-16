import { Routes } from '@angular/router';
import { TudoComponent } from './tudo/tudo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

export const routes: Routes = [{path:'',component:TudoComponent},{path:'conteudo/:Id',component:ConteudoComponent}];
