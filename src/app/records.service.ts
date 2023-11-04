import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ['azzouz' ,'000', 'azzouz@gmail.com'];
  info2: string[] = ['hichem' ,'111', 'hichem@gmail.com'];
  info3: string[] = ['babou' ,'222', 'babou@gmail.com'];
  
  getInfo1() : string[] {
    return this.info1
  }
  getInfo2() : string[] {
    return this.info2
  }
  getInfo3() : string[] {
    return this.info3
  }
  constructor() { }
}
