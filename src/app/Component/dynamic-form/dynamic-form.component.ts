import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  orderForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.orderForm = this.fb.group({
      customerName: [],
      items: this.fb.array([]),
    });
  }

  items(): FormArray {
    return this.orderForm.get("items") as FormArray
  }

  newItems(): FormGroup {
    return this.fb.group({
      itemName: [''],
      description: [''],
      price: ['']
    })
  }

  addItems() {
    this.items().push(this.newItems());
  }

  removeItems(i: number) {
    this.items().removeAt(i);
  }

  submitForm(){
    console.log(this.orderForm.value);
  }
}
