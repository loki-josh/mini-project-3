import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data!: string;
  selectedValue: any
  optionVaalue: any

  constructor(private sharedServiece: SharedService) {
    
  }

  ngOnInit(): void {

  }

  selectChange(event: any) {
    this.optionVaalue = event.target.value
    this.sharedServiece.sendMassage(this.optionVaalue)

   

   
    
    
  }




}


