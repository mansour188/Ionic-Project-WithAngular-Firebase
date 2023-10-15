import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.page.html',
  styleUrls: ['./sgin-in.page.scss'],
})
export class SginInPage implements OnInit {
  email:string='';
  password:string='';
  msg:string="";
  isToastOpen = false;

  constructor(private auth:AuthserviceService,private router:Router) { }

  ngOnInit() {
  }


  hundelSubmit=()=>{
    this.auth.signIn(this.email,this.password).then((data)=>{
      this.msg="sginin successfully"
      this.auth.getTokenAndUserId()
      
      
      setTimeout(()=>{
        this.router.navigate(['/home']);
       
      },1000)
    }).catch((error)=>{
      this.msg=error.message
      setTimeout(()=>{
        this.msg=""
      },5000)
      
    })
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }


}
