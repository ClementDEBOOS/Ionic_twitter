import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { MessagesPage } from '../messages/messages'; 
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';
import { UsersPage } from '../users/users';
/**
 * Generated class for the SideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  tab1Root = MessagesPage;
  tab2Root = UsersPage;

  constructor() {
  }


}
