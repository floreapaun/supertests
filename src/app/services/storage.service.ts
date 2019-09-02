import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

// Storage for mobie app settings and web session storage
export class StorageService {

  constructor() { }

  getData(key){
   return window.sessionStorage.getItem(key)
  }

  setData(key, data){
     window.sessionStorage.setItem(key, data)
  }
  clear(){
    window.sessionStorage.clear();
  }
}
