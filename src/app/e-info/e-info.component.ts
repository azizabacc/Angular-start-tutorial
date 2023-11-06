import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.scss'],
  /* add servise as a provider */
  providers : [DataService]
})
export class EInfoComponent implements OnInit{
  inforeceived1 : string[] = [];
  inforeceived2 : string[] = [];
  inforeceived3 : string[] = [];

  getInfoFromService1 ( ) { 
    this.inforeceived1 = this.dservice.getInfo1()
  }
  getInfoFromService2 ( ) {
    this.inforeceived2 = this.dservice.getInfo2()
   }
  getInfoFromService3 ( ) { 
    this.inforeceived3 = this.dservice.getInfo3()
  }


constructor(private dservice : DataService) { }
ngOnInit(): void {
}
  updateInfo1(frm : any){
    console.log(frm.value.location)
    this.dservice.addInfo(frm.value.location, this.inforeceived1)
  }
  updateInfo2(frm : any){
    console.log(frm.value.location)
    this.dservice.addInfo(frm.value.location, this.inforeceived2)
  }
  updateInfo3(frm : any){
    console.log(frm.value.location)
    this.dservice.addInfo(frm.value.location, this.inforeceived3)
  }


}
