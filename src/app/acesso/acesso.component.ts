import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
    animations:[
        trigger('animacao-banner',[
            state('criado', style({
                opacity: 1
            })),
            transition('void => criado', [
                style({opacity: 0, transform: 'translate(-90px,-5px)'}),
                animate('500ms 0s ease-in-out')
            ])
        ]),
        trigger('animacao-painel',[
            state('criado', style({
                opacity: 1
            })),
            transition('void => criado', [
                style({opacity: 0, transform: 'translate(90px,0px)'}),
                animate('500ms 0s ease-in-out')
            ])
        ])
    ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner = 'criado';
  public estadoPainel = 'criado';
  public cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }
    exibirPainel(event){
      this.cadastro = event === 'cadastro' ? true : false
    }

}
