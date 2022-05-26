import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  username = 'lokesh'
  password = '123'
  displayMassage: any
  r_massage: any
  constructor() {}

  sendMassage(s_massage: any) {
    this.displayMassage = s_massage;
     this.recieaveMassage()
     console.log(this.r_massage)

  }

  recieaveMassage() {
   return this.r_massage = this.displayMassage;
  //  console.log(this.r_massage)
    

  }


}
