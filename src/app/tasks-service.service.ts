import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get<any[]>('https://ionicprojet-e1494-default-rtdb.firebaseio.com/tasks.json');
  }

  updateTask(newCheckedValue:any, idDocument:any) {
    return this.http.patch(
      `https://ionicprojet-e1494-default-rtdb.firebaseio.com/tasks/${idDocument}.json`,
      {
        checked: newCheckedValue,
      }
    );
  }
  deleteTask(idDocument:any) {
    return this.http.delete(
      `https://ionicprojet-e1494-default-rtdb.firebaseio.com/tasks/${idDocument}.json`
    );
  }

  addTask(nTask:any) {
    return this.http.post(
      'https://ionicprojet-e1494-default-rtdb.firebaseio.com/tasks.json',
      nTask
    );
  }
}
