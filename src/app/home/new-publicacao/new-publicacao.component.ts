import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Bd} from '../../bd.service';
import * as firebase from 'firebase'

@Component({
    selector: 'app-new-publicacao',
    templateUrl: './new-publicacao.component.html',
    styleUrls: ['./new-publicacao.component.css']
})
export class NewPublicacaoComponent implements OnInit {

    public email:string
    private imagem: any

    public formulario: FormGroup = new FormGroup({
        'titulo': new FormControl(null)
    });

    constructor(private bd: Bd) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            this.email = user.email
        })
    }

    publicar() {
        this.bd.publicar({
            email: this.email,
            titulo: this.formulario.value.titulo,
            imagem: this.imagem[0]
        })
    }

    preparaImgUpload(event: Event){
       this.imagem = (<HTMLInputElement>event.target).files
    }
}
