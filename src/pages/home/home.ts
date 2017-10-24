import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { MessagesPage } from '../messages/messages'; 
import { SignUpPage } from '../sign-up/sign-up';
import { SignInPage } from '../sign-in/sign-in';
import { SideMenuPage} from '../side-menu/side-menu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public name : string;
public post : string;
public displayName : string;


  constructor(public navCtrl: NavController, public http: Http) {

  }

  click(){
    console.log('clicked ' + this.name);
    alert('hello ' + this.name)
  }
  clickHello(){
    this.http.get('http://cesi.cleverapps.io/hello?name='+ this.name)
    .subscribe(res=>{
      console.log(res.text());
      this.displayName = res.text();
    }, (err)=> {
      console.log(err);
      alert('Erreur ' + err);
    })
  }
  clickPost(){
    this.http.post('http://cesi.cleverapps.io/ping', '')
    .subscribe(res => {
      console.log(res.text());
      this.post = res.text();
    });
  }
  GoToSideMenu() {
    this.navCtrl.push(SideMenuPage);
  }

  clickSignIn(){
    	
this.navCtrl.push(SignInPage);
  }
}
