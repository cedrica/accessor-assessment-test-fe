import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRomanvalue'
})
export class ToRomanNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let mRom = '';
    while (value > 0) {
			if (value  >=  1000) {
				mRom += "M";
				value  -=  1000;
			}
			else if (value  ==  900) {
				mRom  +=  "CM";
				value  -=  900;
			}
			else if (value  >=  500  &&  value < 1000) {
				mRom  +=  "D";
				value  -=  500;
			}
			else if (value  ==  400) {
				mRom  +=  "CD";
				value  -=  400;
			}
			else if (value  >=  100  &&  value < 500) {
				mRom += "C";
				value -= 100;
			}
			else if (value == 90) {
				mRom += "XC";
				value -= 90;
			}
			else if (value >= 50 && value < 100) {
				mRom += "L";
				value -= 50;
			}
			else if (value == 40) {
				mRom += "XL";
				value -= 40;
			}
			else if (value >= 10 && value < 50) {
				mRom += "X";
				value -= 10;
			}
			else if (value == 9) {
				mRom += "IX";
				value -= 9;
			}
			else if (value >= 5 && value < 9) {
				mRom += "V";
				value -= 5;
			}
			else if (value == 4) {
				mRom  +=  "IV";
				value -= 4;
			}
			else if (value >= 1 && value < 4) {
				mRom += "I";
				value -= 1;
			}
		}
		return mRom;
  }

}
