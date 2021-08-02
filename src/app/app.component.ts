import { Component } from '@angular/core';
import firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*post =[
    {
      title : 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: new Date()
    }
  ] */
  constructor(){
    const fbConfig = {
      apiKey: "AIzaSyB4bRvZ9T0Tvb6HjLIvTajILx1G0AqgOa4",
      authDomain: "http-blog-client.firebaseapp.com",
      projectId: "http-blog-client",
      storageBucket: "http-blog-client.appspot.com",
      messagingSenderId: "981759507793",
      appId: "1:981759507793:web:4242a796239d3d5344a770",
      measurementId: "G-01CQYEVM48"
    };
    // Initialize Firebase
    firebase.initializeApp(fbConfig);
    firebase.analytics();
  }
}
