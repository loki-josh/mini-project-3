import { Component } from '@angular/core';
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini_project_3';

  constructor(){
    console.log(data)
  }
}
