import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from 'ionic-angular';
@Injectable()
export class UtilProvider {
  constructor(public alert:AlertController,public loading:LoadingController,public toast:ToastController) {
  }
  doAlert(title, message, buttonText) {
      let alert = this.alert.create({
          title: title,
          subTitle: message,
          buttons: [buttonText]
      });
     alert.present(); 
  }
  
  presentLoading(content) {
    let loadingIndicator = this.loading.create({
      dismissOnPageChange: true,
      content: content
    });
    loadingIndicator.present();
  }

  getToast(message) {
    let toastIndicator = this.toast.create({
      message: message,
      duration:2000
    });
    toastIndicator.present();
  
  }
}

