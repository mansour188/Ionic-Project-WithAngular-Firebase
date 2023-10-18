import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) {}

  getAllTasks() {
   const userId=localStorage.getItem("userId")
   console.log(userId)
    return this.http.get<any[]>(`https://ionicprojet-e1494-default-rtdb.firebaseio.com/annonces.json?`);
  }

  updateAnnonce(newAnnonce:any, idDocument:any) { 
    console.log(idDocument)
    console.log(newAnnonce)
    return this.http.put(
      `https://ionicprojet-e1494-default-rtdb.firebaseio.com/annonces/${idDocument}.json`,
      newAnnonce
    );
  }
  deleteTask(idDocument:string) {
    return this.http.delete(
      `https://ionicprojet-e1494-default-rtdb.firebaseio.com/annonces/${idDocument}.json`
    );
  }

  addAnnonce(annonce:any) {
   
    return this.http.post(
      'https://ionicprojet-e1494-default-rtdb.firebaseio.com/annonces.json',
      annonce
    );
  }
}
