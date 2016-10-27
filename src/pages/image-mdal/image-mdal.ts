import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ImageMdal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image-mdal',
  templateUrl: 'image-mdal.html'
})
export class ImageMdal {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ImageMdal Page');
  }

}
