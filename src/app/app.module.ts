import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Storage } from '@ionic/storage';
import {MarketProvider} from '../providers/market-provider/market-provider';
import {CartProvider} from '../providers/cart-provider/cart-provider';
import {StorageProvider} from '../providers/storage-provider/storage-provider';
import {UserProvider} from '../providers/user-provider/user-provider';
import {UtilProvider} from '../providers/util-provider/util-provider';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [
    MarketProvider,CartProvider,StorageProvider,UserProvider,UtilProvider,Storage
  ]
})
export class AppModule {}
