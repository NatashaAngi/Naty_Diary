import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

@Input()
 CapaPostagem:string =""

 @Input()
 TituloCard:string =""
 
 @Input()
 descricao:string=""

 @Input()
 Id:string ="0"

}
