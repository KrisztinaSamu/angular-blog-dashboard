import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { collection, addDoc } from '@angular/fire/firestore';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private firestore: Firestore) { }

  onSubmit(categoryForm: NgForm) {

    let categoryData: any = {
      category: categoryForm.value.category
    }

    const docRef = addDoc(collection(this.firestore, 'categories'), {
      categoryData
    });
  

    console.log("Document written with ID: ", docRef);
  }

}
