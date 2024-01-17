import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import {dataFake} from '../data/dataFake'
@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {

  
  


  @Input()
  ConteudoFoto:string =''

  @Input()
 fotoCapa:string =''

 
  @Input()
  ConteudoTitulo:string =''

  @Input()
  ConteudoDescricao:string =''

  private id:string | null= "0"


  constructor(private route:ActivatedRoute ){}
  
  ngOnInit():void{this.route.paramMap.subscribe( value => this.id = value.get("id"))
this.setValueToComponent(this.id)}

  setValueToComponent(id:string|null){ const result = dataFake.filter(article => article.id == id)[0]
  
    this.ConteudoTitulo = result.titulo
    this.ConteudoDescricao = result.description
    this.ConteudoFoto = result.photo
  
  }

}