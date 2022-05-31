import { Component } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini_project_3';
  // scores: Observable<string>

  constructor() {
    // console.log(data)



    // this.scores = new Observable(
    //   (commentry)=> {
    //     commentry.next('1')
    //     commentry.next('2')
    //     commentry.next('3')
    //     commentry.next('4')
    //     commentry.next('5')
    //     commentry.next('6')
    //     commentry.next('7')
    //   }
    // )

  }

  ngOnInit() {
    // this.scores.subscribe(
    //   (data)=>console.log(data)
    // )

    // const k =of(1,2,3,4,5,6,7,8,9)
    // console.log("Squaring the numbers")
    // const square_nums = map((loki: number)=> (loki * loki)  )
    // const square_value = square_nums(k)
    // square_value.subscribe((data)=>{console.log(data)})

    // const k =of(1,2,3,4,5,6,7,8,9)
    // console.log("Multiplaying the numbers with 2")
    // const square_nums = map((loki: number)=> (loki * 2)  )
    // const square_value = square_nums(k)
    // square_value.subscribe((data)=>{console.log(data)})


    const k = of(1, 2, 3, 4, 5, 6, 7, 8, 9)
    console.log("filtering odd numbers")
    const example = k.pipe(filter(num => num % 2 === 1));
    const subscribe = example.subscribe(val => console.log(val));




  }
}
