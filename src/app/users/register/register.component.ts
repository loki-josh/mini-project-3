import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm:any
  array:any =[];
  abc:any;

  data:any = {firstname: "", lastname: "", phone:"", email:"", password:""}

  constructor(private router:Router, private sharedserviese:SharedService) { 

  

   
  }

  ngOnInit(): void {
     this.sharedserviese.sendMassage(this.array)
    this.registrationForm = new FormGroup({
      'firstName': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'lastName': new FormControl("", [Validators.required, Validators.maxLength(15)]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'phone': new FormControl("", [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
      'password': new FormControl("", [Validators.required]),
      'confirmPassword': new FormControl("", [Validators.required]),
      'address': new FormControl("", [Validators.required]),

    })
    
   
    
   
  }

  submitForm() {
    this.array.push(this.registrationForm.value)
    // console.log(this.registrationForm.value)
    // console.log(this.array)

    this.array.forEach((element: any) => {
      // console.log(element.firstName)
      // console.log(element.lastName)
      // console.log(element.phone)
      // console.log(element.email)
      // console.log(element.password)


      localStorage.setItem('firstname', this.registrationForm.value.firstName);

    //  this.abc = localStorage.getItem(this.registrationForm.firstName)
    //  console.log(localStorage.getItem('firstname'))
     


      // localStorage.setItem('last name', element.lastName)
      // localStorage.setItem('email', element.email)
      // localStorage.setItem('phone', element.phone)
      // localStorage.setItem('password', element.password)
      // localStorage.setItem('address', element.address )

      


    });

    

    // console.log(this.array)
    

    // console.log(this.registrationForm.value)
    
    // console.log(this.array)
    

  }
  loginNavigation(){
    this.router.navigate([('./login')])
  }
  clear(){
    localStorage.clear()
  }



}
