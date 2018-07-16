import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 @Output() public exibiPainel: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

    exibirCadastro() {
      this.exibiPainel.emit('cadastro');
    }

}
