import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { MessagesPage } from '../messages/messages'; 
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public username : string;
  public pwd : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  getHeaders(): Headers{
    let headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');
    return headers;
  }

  SignUp() {
    let body = 'username=' + this.username + '&pwd=' + this.pwd;
    
    this.http.post('http://cesi.cleverapps.io/signup', body, {headers: this.getHeaders()})
    .subscribe(res => {
      console.log('create account');
    }, (err) => {
      console.log('account erreur');
    });
    
  }

}