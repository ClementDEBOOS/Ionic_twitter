import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import { SignUpPage } from '../sign-up/sign-up';
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

public messages : string;
public SendMessages : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.GetMessages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  displayToken(){
    alert(this.navParams.get('token'));
  }

  getHeaders(): Headers{
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    return headers;
  }

  GetMessages() {
    this.http.get('http://cesi.cleverapps.io/messages', {headers: this.getHeaders()})
    .subscribe((res)=> {
      console.log(res.json());
      this.messages = res.json();
    }, (err) => {
      console.log(err);
    });
  }

  PostMessages() {
    let body = 'message=' + this.SendMessages;
    this.http.post('http://cesi.cleverapps.io/messages', body, {headers: this.getHeaders()})
    .subscribe((res) => {
      this.GetMessages();
    })
  }
}
