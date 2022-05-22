import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 selectedValue:any
  constructor() { }

  ngOnInit(): void {
this.selectedValue = localStorage.getItem('firstname')

  }

  
 

}


