import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import {QuoteService} from '../../services/quote';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

    quote:{
            category:string,
            quotes:Quote[],
            icon:string
           };

  ngOnInit(){
    this.quote=this.navParams.data;
  }
  constructor(
                private alertCtrl:AlertController,
                private quoteService:QuoteService,
                private navCtrl: NavController,
                private navParams: NavParams) {
  }
  onAddToFavorites(selectedQuote:Quote){
    const alert=this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you sure?',
      message: 'Are you sure you want yo add the quote?',
      buttons:[{
        text:'Yes,go ahead',
        handler:()=>{
          this.quoteService.addQuoteToFavorites(selectedQuote);
          console.log("ok");
        }
      },{
        text:'No, I changed my mind',
        handler:()=>{
          console.log('Cancelled')
        }
      }]
    });
    alert.present();
  }
  onRemoveFromFavorites(quote:Quote){
    this.quoteService.removeQuoteFromFavorites(quote);
  }
  isFavorite(quote:Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }
  ionViewDidLoad() {


    console.log(this.quote);
    console.log(this.navParams.data);
  }

}
