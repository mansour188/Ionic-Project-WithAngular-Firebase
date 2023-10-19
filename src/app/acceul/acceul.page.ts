import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnonceService } from '../annonce-service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-acceul',
  templateUrl: './acceul.page.html',
  styleUrls: ['./acceul.page.scss'],
})
export class AcceulPage implements OnInit {
  allAnnonce:any[] = [];
  @ViewChild(IonContent) content!: IonContent;


  constructor(
    private annonceSer:AnnonceService ,

  ) { }

  ngOnInit() {
    this.getAnnonce()
  }

  getAnnonce() {
    this.allAnnonce = [];
    this.annonceSer.getAllTasks().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
        
          this.allAnnonce.push({ id: key, ...response[key] });
        }
        const userId=localStorage.getItem("userId")
     
        console.log(this.allAnnonce)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  scrollToTop() {
    
    this.content.scrollToTop(500);
  }

}
