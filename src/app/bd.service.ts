import * as firebase from 'firebase'

export class Bd {
    public publicar(publicacao){
       firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
           .push({titulo: publicacao.titulo})

        let nomeimg = Date.now() //Cuidar em apps com mais de 1 up por seg...

        firebase.storage().ref()
            .child(`imagens/${nomeimg}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    console.log(snapshot)
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    console.log('Upload completo')
                });

    }
}
