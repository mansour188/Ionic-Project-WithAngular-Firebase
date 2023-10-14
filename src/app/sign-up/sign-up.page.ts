import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css'],
})
export class SignUpPage implements OnInit {
  email!:string;
  name!:string;

  password!:string;


   hundelSubmit=()=>{
    console.log(this.email,this.password,this.name)
    this.auth.register(this.name,this.email,this.password).then((userCredential)=>{
      this.auth.getTokenAndUserId()
      console.log(userCredential)
    }).catch((error)=>{
      console.log(error)
    })
    
  }


  constructor(private auth:AuthserviceService) { }

  ngOnInit() {
  }

}
