import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
@Injectable()
export class StorageProvider {
  constructor(public storage:Storage){

  }
 // storage = localStorage;
  get(key) {
    return this.storage.get(key);
  }
  
  set(key, value) {
    this.storage.set(key, value);
  }
  
  getObject(key) {
    let value :any = this.get(key);
    let returnValue;
    if(value) {
      returnValue = JSON.parse(value);      //   => some error
    } else {
      returnValue = null;
    }
    return returnValue;
  }
  
  setObject(key, value) {
    this.storage.set(key, JSON.stringify(value));
  }
  
  remove(key) {
    this.storage.remove(key);
  }
}

