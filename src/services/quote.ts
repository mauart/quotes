import {Quote} from '../data/quote.interface';

export class QuoteService{
  private favoriteQuotes:Quote[]=[];

  addQuoteToFavorites(quote:Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }
  removeQuoteFromFavorites(quote:Quote){
    const position=this.favoriteQuotes.findIndex((myQuote:Quote)=>{
      return myQuote.id === quote.id;
    });
    this.favoriteQuotes.splice(position,1);
  }
  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }
  isQuoteFavorite(quote:Quote){
    return this.favoriteQuotes.find((quoteEl)=>{
      return quoteEl.id==quote.id;
    })
  }
}
