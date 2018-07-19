import { Component , OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
      var config = {
          apiKey: "AIzaSyAtqjj5ivzi_tf2Hf7b9UhoK64my-bacvY",
          authDomain: "insta-14ecf.firebaseapp.com",
          databaseURL: "https://insta-14ecf.firebaseio.com",
          projectId: "insta-14ecf",
          storageBucket: "insta-14ecf.appspot.com",
          messagingSenderId: "555274484207"
      };
    firebase.initializeApp(config);
  }
}
