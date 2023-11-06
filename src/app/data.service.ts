import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1 : string[]=['azzouz','001','azzouz@gmail.com']
  info2 : string[]=['hichem','002','hichem@gmail.com']
  info3 : string[]=['babou','003','babou@gmail.com']

  getInfo1():string[]{
    return this.info1;
  }
  getInfo2():string[]{
    return this.info2;
  }
  getInfo3():string[]{
    return this.info3;
  }

  addInfo(info: any, infoArr: string[]) {
    infoArr.push(info);
    return infoArr;
  }

  constructor() { }
}
