import { Component, ViewChild } from '@angular/core';
import { AlertController, IonContent, IonModal } from '@ionic/angular';
import { AnnonceService } from '../annonce-service';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { UploadImageTofireService } from '../upload-image-tofire.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  
  @ViewChild(IonModal)modal!: IonModal;
  isModalOpen = false;

  currentDate:any;
  allAnnonce:any[] = [];
  showAddButton = true;
  email!:string|null
  file!:File;
  urlImage:string=''
  category:string=''
  product:string=''
  webLink:string=''
  fileUrl:string=''
  discription:string=''
  updateId:string=''
  @ViewChild(IonContent) content!: IonContent;

    
   

  constructor(
    private annonceSer:AnnonceService ,
    private alertController: AlertController,
    private auth:AuthserviceService,
    private router:Router,
    private imUp:UploadImageTofireService
  ) {
   
    
  }

  toggleBtn() {
    this.showAddButton = !this.showAddButton;
  }

   addNewAnnonce() {
   this.uploadImage().then(()=>{
    const annonce = {
      category:this.category,
      product:this.product,
      webLink: this.webLink,
      date: new Date(),
      userId:localStorage.getItem("userId"),
      urlImage:this.urlImage,
      discription:this.discription
    };
    this.annonceSer.addAnnonce(annonce).subscribe({
      next:(data)=>{console.log(data)
        this.getAnnonce()
      },
      error:(err)=>{console.log(err.message)}
    })
   }).catch(()=>{
    console.log("failed")
   })

   
   
   this.cancel()
   
    

   

   
 
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
            
            this.annonceSer.deleteTask(idDocument).subscribe({
              next: (response) => {
                this.getAnnonce();
                
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


  getAnnonce() {
    this.allAnnonce = [];
    this.annonceSer.getAllTasks().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
        
          this.allAnnonce.push({ id: key, ...response[key] });
        }
        const userId=localStorage.getItem("userId")
     
        this.allAnnonce=this.allAnnonce.filter((task)=>{ return task.userId===userId})
        console.log(this.allAnnonce)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

 
  async presentAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Etes vous sur de log out?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: ()=>{
            localStorage.clear()
            this.auth.logOut()
            this.router.navigate(['/sginIn'])
        
        
          },
        },
      ],
    });

    await alert.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
 

  ngOnInit() {
    this.currentDate = new Date();
    this.getAnnonce();
    this.email=localStorage.getItem("email");
    
  
  }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
     
     this.file=file
     const fileUrl = URL.createObjectURL(file);
     this.fileUrl=fileUrl

     
    }
  }


  uploadImage = () => {
    return new Promise((resolve, reject) => {
         this.imUp.uploadImage(this.file).subscribe(
          (snapshot) => {
            if (snapshot) {
              snapshot.ref
                .getDownloadURL()
                .then((downloadURL) => {
                  this.urlImage = downloadURL;
                  console.log(this.urlImage);
                  resolve(this.urlImage); // Resolve the Promise when URL is available
                })
                .catch((error) => {
                  console.error('Error getting download URL:', error);
                  reject(error); // Reject the Promise in case of an error
                });
            }
          },
          (error) => {console.log(error)}
    )
  })
}

  

 

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.product,this.category,this.urlImage,this.discription,this.webLink=""

  }

  
  onSubmit(event: Event) {
    event.preventDefault();}


  update=(obj:any)=>{
  this.fileUrl=""
  this.category=obj.category
  this.product=obj.product
  this.urlImage=obj.urlImage
  this.discription=obj.discription
  this.webLink=obj.webLink
  this.updateId=obj.id
  console.log(this.updateId)
  
   


  }
  sendUpdate=()=>{
    this.imUp.deleteImage(this.urlImage)
    this.uploadImage().then(()=>{
      const annonce = {
        category:this.category,
        product:this.product,
        webLink: this.webLink,
        date: new Date(),
        userId:localStorage.getItem("userId"),
        urlImage:this.urlImage,
        discription:this.discription
      };
      this.annonceSer.updateAnnonce(annonce,this.updateId).subscribe({
        next:(data)=>{

          this.getAnnonce()
        
        
        },
        error:(err)=>{throw new Error(err.message)}
      })
     }).catch(()=>{
      console.log("failed")
     })

    this.setOpen(false)
   
    

 

  }
  add=()=>{
    this.urlImage=''
    this.category=''
    this.product=''
    this.webLink=''
    this.fileUrl=''
    this.discription=''

  }
  scrollToTop() {
    
    this.content.scrollToTop(500);
  }

}

