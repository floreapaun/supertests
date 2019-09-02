import { Injectable } from '@angular/core';
import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {



  constructor() { }

  getData(key){
   return appSettings.getString(key);
  }

  setData(key,data){
    appSettings.setString(key, data);

  }
  clear(){
      appSettings.clear();
  }
}
