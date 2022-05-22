import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:any;
showmsg:any;

collected:any
  constructor(private router:Router, private sharedServiese:SharedService) { 

  }

  ngOnInit(): void {
      this.showmsg=this.sharedServiese.recieaveMassage()


    this.loginForm = new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required]),
     

    })

  }

  submitForm() {
    for (let i = 0; i < this.showmsg.length; i++) {
      if(this.showmsg[i].email == this.loginForm.value.email && this.showmsg[i].password == this.loginForm.value.password){
        this.router.navigate([('./main')])
      }
      
    }
    console.log(this.loginForm.value.email)
  }
  
}


