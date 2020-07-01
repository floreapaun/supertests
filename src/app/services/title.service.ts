import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
 private Value;

    constructor() {
        this.Value = 'Testino';
    }

    setValue(val) {
        this.Value = val;
    }

    getValue() {
        return this.Value ;
    }

}
