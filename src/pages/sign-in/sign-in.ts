import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { MessagesPage } from '../messages/messages'; 
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';
import { SideMenuPage } from '../side-menu/side-menu';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  public username : string;
  public pwd : string;
  public token : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  getHeaders(): Headers{
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', this.navParams.get(this.token));
    return headers;
  }

  SignIn(){
    let body = 'username=' + this.username + '&pwd=' + this.pwd;
    this.http.post('http://cesi.cleverapps.io/signin' , body, {headers: this.getHeaders()})
    .subscribe((res) => {
      this.token = res.json();
      localStorage.setItem('token', this.token.token)
      this.navCtrl.push(SideMenuPage);
    },(err)=>{
      console.log(err);
    })
  }
  GoSignUp(){
    this.navCtrl.push(SignUpPage);
  }
}
