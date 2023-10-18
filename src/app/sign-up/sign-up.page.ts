import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css'],
})
export class SignUpPage implements OnInit {
  email:string='';
  name:string='';
  password:string='';
  
  isToastOpen = false;
  msg=""


 


   hundelSubmit=()=>{
    this.auth.register(this.name,this.email,this.password).then((userCredential)=>{
      this.msg="sginUp successfully"
      this.auth.getTokenAndUserId()
      
      
     
        setTimeout(()=>{
          this.router.navigate(['/sginIn']);
        },1000)
        
   

     
    }).catch((error)=>{
      this.msg=error.message
     
      
    })
    
  }
 
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }


  constructor(private auth:AuthserviceService,private router: Router) { 
   
    
  }

  ngOnInit() {
  }

}
