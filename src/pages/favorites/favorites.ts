import { Component,OnInit } from '@angular/core';
import { MenuController,IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {Quote} from '../../data/quote.interface';

import {QuoteService} from '../../services/quote';
import {QuotePage} from '../quote/quote';
import {SettingsService} from '../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  quotes:Quote[]=[];

  ngOnInit(){


  }
  constructor(
              private quoteService:QuoteService,
              private navCtrl: NavController,
              private navParams: NavParams,
              private settingService:SettingsService,
              private modalCtrl:ModalController) {
  }

  getBackground(){
    return this.settingService.isAltBackground()?'altQuoteBackground':'quoteBackground';
  }

  onViewQuote(quote:Quote){
    const modal=this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.onRemoveFromFavorites(quote);
      }

    });
  }
  isAltBackground(){
    return this.settingService.isAltBackground();
  }
  onRemoveFromFavorites(quote:Quote){
    this.quoteService.removeQuoteFromFavorites(quote);
    const position=this.quotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id===quote.id;
    });
    this.quotes.splice(position,1);

  }
  ionViewWillEnter() {
    this.quotes=this.quoteService.getFavoriteQuotes();
    console.log("favorites",this.quotes);
    console.log('ionViewDidLoad FavoritesPage');
  }

}
