import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the SlideIntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide-intro',
  templateUrl: 'slide-intro.html',
})
export class SlideIntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideIntroPage');
  }


  navHome()
  {
    this.navCtrl.setRoot(LoginPage);
    
  }
}
