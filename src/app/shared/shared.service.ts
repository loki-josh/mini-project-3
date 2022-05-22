import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  displayMassage:any
  r_massage:any
  dropdown_input_Value:any
  dripdown_output_value:any
  x:any;
  constructor() { }


  sendMassage(s_massage:any){
    this.displayMassage = s_massage;

  }

  recieaveMassage(){
     return this.r_massage = this.displayMassage;

  }
  

}
