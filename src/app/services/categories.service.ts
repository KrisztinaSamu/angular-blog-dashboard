import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc, doc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr/public_api';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: Firestore, private toastr: ToastrService) { }

    saveData(data: any) {
      addDoc(collection(this.firestore, 'categories'), data)
  
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          this.toastr.success('Data insert successfully ..!');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
  
    }
 
  
}
