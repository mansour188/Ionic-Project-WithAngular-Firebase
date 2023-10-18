import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, of, switchMap } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UploadImageTofireService {

  constructor(private storage: AngularFireStorage) { }
  

  uploadImage(file: File) {
   
    
    const filePath = `/images/${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    return uploadTask.snapshotChanges().pipe(
      finalize(() => {
        return storageRef.getDownloadURL().subscribe(url=>{
          const urlImage=url
          console.log(url)
          return urlImage
        })

      })
    );
  }

  deleteImage(imagePath: string) {
    const imageRef = this.storage.refFromURL(imagePath);

    imageRef.delete().subscribe(
      () => {
        console.log('Image deleted successfully.');
      },
      (error) => {
        console.error('Error deleting image:', error);
      }
    );
  }
}
