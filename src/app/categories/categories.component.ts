import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private angFireSt:Firestore) {}

  ngOnInit(): void {
    
  }

  onSubmit(categoryForm: NgForm) {
    let categoryData = {
      category: categoryForm.value.category
    }

    let categoriesCollection = collection(this.angFireSt,'categories');

    /*let dataToForm = categoriesCollection.add(categoryData).then(docRef => {
      console.log(docRef);
    })
    .catch(err => { console.log(err) });*/
    console.log(categoriesCollection)
    

  }

}
