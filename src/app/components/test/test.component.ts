import { Component } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  enable:boolean = true;
  toggle:boolean = true;
  value = '';
  textValue?: string | undefined;
  textArr!: string[];


  constructor(private testService: TestServiceService) {
    this.textArr = this.testService.getTexts();
  }

  //Calling this method will determine if the text in button should be
  //On or Off and writes the state of button to the user
  onClick() {
    this.enable = !this.enable;
    this.toggle = !this.toggle;
    this.value = this.testService.getText(this.toggle);
  }


  //Delete text from text array
  onClickDelete(value: string) {
    for(var text of this.textArr) {
      if(text == value) {
        const index = this.textArr.lastIndexOf(text);
        this.textArr.splice(index, 1);
      }
    }
    
  }

  //Adding new text
  addText(newText: string, isButton: boolean) {
    if (isButton) {
      this.onClick();
    }
    if (newText) {
      this.textArr?.push(newText);
    }
  }

  //Take input value, add it to the last text on the array. Push result to the end of the array.
  addToLast(newText: string) {
    this.textValue = this.textArr?.at(this.textArr.length - 1);
    this.textArr?.push(this.textValue += newText);    
  }

}
