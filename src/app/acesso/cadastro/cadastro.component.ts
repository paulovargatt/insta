import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsuarioModel} from '../usuario.model';
import {Auth} from '../../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
    @Output() public exibiPainel: EventEmitter<string> = new EventEmitter();
    public formulario: FormGroup = new FormGroup({
        'email': new FormControl(null),
        'nome_completo': new FormControl(null),
        'nome_usuario': new FormControl(null),
        'senha': new FormControl(null)
    });

    constructor(private auth: Auth) { }

  ngOnInit() {
  }

    exibirLogin() {
        this.exibiPainel.emit('login');
    }

    submit() {
        const usuario: UsuarioModel = new UsuarioModel(
            this.formulario.value.email,
            this.formulario.value.nome_completo,
            this.formulario.value.nome_usuario,
            this.formulario.value.senha,
        );
        this.auth.cadastrarUsuario(usuario)
            .then(() => {
                this.exibirLogin();
            });
    }
}
