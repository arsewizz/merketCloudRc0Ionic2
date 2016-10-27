import {Component, ViewChild, enableProdMode} from '@angular/core';
import {Platform, Nav, Events, } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {StorePage} from '../pages/store/store';
import {MarketProvider} from '../providers/market-provider/market-provider';
import {CartProvider} from '../providers/cart-provider/cart-provider';
import {StorageProvider} from '../providers/storage-provider/storage-provider';
import {UserProvider} from '../providers/user-provider/user-provider';
import {UtilProvider} from '../providers/util-provider/util-provider';
declare let marketcloud:any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = StorePage;
  isLoggedIn = false;
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform,
  public cartProvider:CartProvider, 
  public market: MarketProvider, 
  public storage: StorageProvider, 
  public events:Events,
  public userProvider: UserProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];
    
    events.subscribe('user:logged_out', () => {
       this.isLoggedIn = false;
    });
    
    events.subscribe('user:logged_in', () => {
      this.isLoggedIn = true;
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      let user = this.storage.getObject('user');
      if(user) {
        this.market.getMarketCloud().token = user.token;
        this.market.getMarketCloud().user = user.user;
        this.isLoggedIn = true;
      }
      this.cartProvider.intializePayments();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout() {
    this.userProvider.logout();
    this.events.publish('user:logged_out', {});
  }
}
