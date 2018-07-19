import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import UsuarioModel from './acesso/usuario.model';
import * as firebase from 'firebase';

@Injectable()
export class Auth {

    public token_id;

    constructor(private router: Router) {}

    public cadastrarUsuario(usuario: UsuarioModel): Promise<any> {
     return firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.senha)
            .then((ret)=>{

                delete usuario.senha
                //register
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set({usuario})

            })
            .catch((err)=>{
              console.log(err)
            })
    }

    public autenticar(email,senha): void {
        firebase.auth().signInWithEmailAndPassword(email,senha)
            .then((res) => {
                firebase.auth().currentUser.getIdToken().then((token) => {
                    this.token_id = token;
                    localStorage.setItem('idToken', this.token_id)
                     this.router.navigate(["/home"]);
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    autenticado(){
        if(this.token_id === undefined && localStorage.getItem('idToken') != null){
            this.token_id = localStorage.getItem('idToken')
        }

        if(this.token_id === undefined){
            this.router.navigate(['/'])
        }

        return this.token_id !== undefined
    }

    sair(){
        firebase.auth().signOut()
            .then(()=>{
                localStorage.removeItem('idToken')
                this.token_id = undefined;
                this.router.navigate(['/'])
            })

    }
}