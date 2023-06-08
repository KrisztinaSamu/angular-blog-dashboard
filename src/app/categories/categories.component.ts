import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';
/*import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc, doc } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';*/



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor( private categoryService: CategoriesService ) { }

 onSubmit(categoryForm: NgForm) {

    let categoryData: Category = {
      category: categoryForm.value.category,
    }

    this.categoryService.saveData(categoryData)
    /* // Regular expression pattern
    const CATEGORY_PATTERN = /^[A-Za-z\s]+$/;

    let categoryData: any = {
      category: categoryForm.value.category,
    }

    // Custom validator function
    function categoryValidator(categoryData: any) {

      if (categoryData && !CATEGORY_PATTERN.test(categoryData)) {
        return { invalidCategory: true };
      }
      return null;
    }
    categoryValidator(categoryData);



    let subCategoryData: any = {
      subCategory: 'subCategory1',
    }

    addDoc(collection(this.firestore, 'categories'), categoryData)

      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);

        const subCollectionRef = collection(doc(this.firestore, 'categories', docRef.id), 'subcategories');
        addDoc(subCollectionRef, subCategoryData)
          .then((subDocRef: any) => {
            console.log('Subdocument written with ID: ', subDocRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });*/

  }
}