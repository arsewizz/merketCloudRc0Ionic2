import {Injectable} from '@angular/core';
declare let marketcloud:any;
@Injectable()
export class MarketProvider {
  market:any;
  marketcloud:any
  constructor() {
    marketcloud.public = "our key";
    this.market = marketcloud;
  };
  
  getMarketCloud() {
    return this.market;
  }
  
  getCategories() {
    let promise = new Promise((resolve, reject) =>{
     this.market.categories.list({}, (error, categories) => {
       if(categories) {
         resolve(categories);
       } else {
         reject(error);
       }
     });
    })
    return promise;
  };
  
  getProducts(categoryID) {
    let promise = new Promise((resolve, reject) =>{
      this.market.products.list({category_id: categoryID}, (error, products) => {
        if(products) {
          resolve(products);
        } else {
          reject(error);
        }
      });
    });
    
    return promise;
  };
}

