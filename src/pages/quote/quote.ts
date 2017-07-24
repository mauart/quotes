import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person:string;
  text:string;
  constructor(
                private viewCtrl:ViewController,
                public navCtrl: NavController,
                public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.person=this.navParams.get('person');
    this.text=this.navParams.get('text');
    console.log('ionViewDidLoad QuotePage');
  }
  onClose(remove=false){    
    this.viewCtrl.dismiss(remove);
  }
}
