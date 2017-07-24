import { Component } from '@angular/core';
import { Toggle,IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsService} from '../../services/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                private settingService:SettingsService
              ) {
  }
  onToggle(toogle:Toggle){
    this.settingService.setBackground(toogle.checked);
  }
  checkAltBackground()
  {
    return this.settingService.isAltBackground();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
