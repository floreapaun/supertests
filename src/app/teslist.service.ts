import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class TeslistService  implements InMemoryDbService{

  constructor() { }

  createDb() {
    let tests = [
      { id: 1, name: 'ANGULAR' },
      { id: 2, name: 'HTET' },
      { id: 3, name: 'CTET' },
      { id: 4, name: 'JAVASCRIPT' }
    ];

    let questions = [
      {   "id":1,
        "question": "1.अशुद्ध विकल्प को पहचानिए  ",
        "options_a": "विश्वामित्र = विश्व + मित्र",
        "options_b": "मुसलाधार = मूसल + धार",
        "options_c": "सभी = सब + ही",
        "options_d": "दीनानाथ = दीना + नाथ ",
        "answer": "d"
      },
      {
        "id": 2,
        "question": "2.\"वह जिस पर हमला किया गया हो \" - के लिए एक शब्द चुने ",
        "options_a": "आत्मघात ",
        "options_b": "आघात ",
        "options_c": "आक्रांत ",
        "options_d": "आक्रांता",
        "answer": "c"
      },
      {
        "id": 3,
        "question": "3.\"जो नायिका अपने प्रमी से मिलने स्वय जाए\" - के लिए एक शब्द चुने ",
        "options_a": "दुहिता ",
        "options_b": "अभिसारिका ",
        "options_c": "प्रोषिपतिका",
        "options_d": "स्व्यगमना",
        "answer": "b"
      },
    ];



    return { tests, questions };
  }
}
