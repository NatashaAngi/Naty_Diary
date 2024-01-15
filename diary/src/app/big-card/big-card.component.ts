import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
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

}
