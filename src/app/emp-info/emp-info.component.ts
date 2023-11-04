import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.scss'],
  // declare the provider
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit{
 
 infoReceived1 : string[]=[];
 infoReceived2 : string[]=[];
 infoReceived3 : string[]=[];
 getInfoFromServiceClasse1() {
  this.infoReceived1 = this.rservice.getInfo1();


 }
 getInfoFromServiceClasse2() {

  this.infoReceived2 = this.rservice.getInfo2();

 }
 getInfoFromServiceClasse3() {

  this.infoReceived3 = this.rservice.getInfo3();

 }
 // private rservice : RecordsService let us retrieve the data from the service 
 constructor(private rservice : RecordsService){

 }
 ngOnInit(): void {
   
 }
}
