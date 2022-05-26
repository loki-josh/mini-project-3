import { Component, OnInit, NgModule } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value:any
  converted:any
  sahredvalue:any
  salary = 1000;
  date = 12122020
  value_expression = "lokesh"
  
 
  selectedcurrency:any 
  constructor(private SharedService:SharedService) { }

  ngOnInit(): void {
  console.log(this.SharedService.recieaveMassage())
  

  }

  selectChange(event:any){
    this.selectedcurrency = event.target.value
  }
 
  convertion(){
    if(this.selectedcurrency == "US_Dollars" ){
      this.converted = this.value * 77
    }
    if(this.selectedcurrency == "Euro" ){   
      this.converted = this.value * 81
    }
    if(this.selectedcurrency == "British_Pound" ){
      this.converted = this.value * 96
    }
    if(this.selectedcurrency == "British_Pound" ){
      this.converted = this.value * 54
    }
    if(this.selectedcurrency == "Australian_Dollars" ){
      this.converted = this.value * 21
    }
    if(this.selectedcurrency == "UAE_Dirham" ){
      this.converted = this.value * 49
    }

    // console.log(this.value)
  
  }

}


