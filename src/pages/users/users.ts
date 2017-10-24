import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import { SideMenuPage } from '../side-menu/side-menu';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public messages : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.GetMessages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
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
}
