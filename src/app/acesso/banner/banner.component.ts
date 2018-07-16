import {Component, OnInit, transition} from '@angular/core';
import {trigger, state, style, animate} from '@angular/animations';
import {Imagem} from './Imagem.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
    animations: [
        trigger('banner', [
            state('escondido', style({
                opacity: 0
            })),
            state('visivel', style({
                opacity: 1
            })),
            transition('escondido <=> visivel', animate('1s ease-in')),
        ])
    ]
})
export class BannerComponent implements OnInit {

  public estado:string = 'escondido';
  public imagens: Imagem[] = [
      {estado:'visivel', url: '/assets/banner-acesso/imagens/img_1.png'},
      {estado:'escondido', url: '/assets/banner-acesso/imagens/img_2.png'},
      {estado:'escondido', url: '/assets/banner-acesso/imagens/img_3.png'},
      {estado:'escondido', url: '/assets/banner-acesso/imagens/img_4.png'},
      {estado:'escondido', url: '/assets/banner-acesso/imagens/img_5.png'},
  ]
  constructor() { }
  ngOnInit() {
    setTimeout(()=> {
      this.logicaRotacao()
    },3000)
  }


  public logicaRotacao(){

    let idx:number;

      for (let i = 0; i<= this.imagens.length; i++){
        if(this.imagens[i].estado === 'visivel'){
          this.imagens[i].estado = 'escondido'
            //se for tamanho total do array entao volta pra 0 se nao ++
            idx = i === this.imagens.length -1 ? 0 : i + 1
            break
        }
      }
      this.imagens[idx].estado = 'visivel'

      setTimeout(()=>  this.logicaRotacao(),3000)
  }

}
