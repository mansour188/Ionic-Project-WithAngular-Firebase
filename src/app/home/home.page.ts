import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TasksServiceService } from '../tasks-service.service';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  
  currentDate:any;
  allTasks:any[] = [];
  showAddButton = true;
  email!:string|null
  constructor(
    private taskSer: TasksServiceService,
    private alertController: AlertController,
    private auth:AuthserviceService,
    private router:Router,
    private shared:SharedService
  ) {
    
  }

  toggleBtn() {
    this.showAddButton = !this.showAddButton;
  }

  addNewTask(txtValue:any) {
    let newTask = {
      checked: false,
      text: txtValue,
      date: new Date(),
      userId:localStorage.getItem("userId")
    };
    this.taskSer.addTask(newTask).subscribe({
      next: (response) => {
        console.log(response);
        this.getTasks();
        this.toggleBtn();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async presentAlert(idDocument: any) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Etes vous sur de vouloir supprimer ce task ?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.taskSer.deleteTask(idDocument).subscribe({
              next: (response) => {
                this.getTasks();
              },
              error: (err) => {
                console.log(err);
              },
            });
          },
        },
      ],
    });

    await alert.present();
  }

  changeCheckedValue(checkedValue:any, idDocument:any) {
    checkedValue = !checkedValue;
    this.taskSer.updateTask(checkedValue, idDocument).subscribe({
      next: (response) => {
        this.getTasks();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getTasks() {
    this.allTasks = [];
    this.taskSer.getAllTasks().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
        
          this.allTasks.push({ id: key, ...response[key] });
        }
        console.log(this.allTasks);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logOut=()=>{
    localStorage.clear()
    this.auth.logOut()
    this.router.navigate(['/sginIn'])


  }

  ngOnInit() {
    this.currentDate = new Date();
    this.getTasks();
    this.email=localStorage.getItem("email");
    console.log(this.email)
  
  }


}

