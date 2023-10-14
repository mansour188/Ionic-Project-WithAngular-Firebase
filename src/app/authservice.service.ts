import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {



  constructor(private afAuth: AngularFireAuth) {

  
 
   }

   register=(name:string,email:string,password:string)=>{
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      if (userCredential && userCredential.user) {

      return userCredential.user.updateProfile({
        displayName: name
      }).then(() => {
        return userCredential.user; // Return the user data
      });;
    }else{
      throw new Error("user not register ")
    }
    });;

      
   }

   getTokenAndUserId=()=>{
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        user.getIdToken().then((userToken) => {
          const userId = user.uid;
  
          
          localStorage.setItem("userId",userId)
          localStorage.setItem("userToken",userToken)

        });
      }
    });
   }
}
