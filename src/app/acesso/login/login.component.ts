import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Auth} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 @Output() public exibiPainel: EventEmitter<string> = new EventEmitter();

 public form: FormGroup = new FormGroup({
     'email': new FormControl(null),
     'senha': new FormControl(null)
 })

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

    exibirCadastro() {
      this.exibiPainel.emit('cadastro');
    }

    public autenticacao(){
        let email = this.form.value.email;
        let pass = this.form.value.senha;
         this.auth.autenticar(email,pass)
    }
}
