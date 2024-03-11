import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  textValue: string = '';
  textArr: string[] = ["Test", "Stuff", "Neat"];

  getText(toggle: boolean): string {
    this. textValue = 'This button is now ';
    if (toggle == false) {
      this.textValue += 'Disabled'
    }
    else {
      this.textValue += 'Enabled'
    }
    return this.textValue;
  }

  getTexts(): string[] {
    return this.textArr;
  }

  constructor() { }
}
