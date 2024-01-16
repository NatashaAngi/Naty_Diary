import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {datafake}from '../data/datafake'
@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
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

  @Input()
  private Id:string | null= "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit():void{this.route.paramMap.subscribe(value => this.Id = value.get("Id"))
 
}

setValuetoComponent(id:string|null){ const result = datafake.filter(article => article.Id == id)[0]

this.ConteudoTitulo = result.titulo
this.ConteudoDescricao = result.descricao
this.ConteudoFoto = result.foto
}
} 
