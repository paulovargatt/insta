import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    @Output() public exibiPainel: EventEmitter<string> = new EventEmitter();


    constructor() { }

  ngOnInit() {
  }

    exibirLogin() {
        this.exibiPainel.emit('login');
    }
}
