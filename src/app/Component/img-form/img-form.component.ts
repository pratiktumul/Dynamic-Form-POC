import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-img-form',
  templateUrl: './img-form.component.html',
  styleUrls: ['./img-form.component.css']
})
export class ImgFormComponent implements OnInit {
  imgFile: string = '';

  uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required])
  });

  constructor() { }
  ngOnInit(): void {
  }

  get uf() {
    return this.uploadForm.controls;
  }

  onImageChange(e: any) {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }

  upload() {
    console.log(this.uploadForm.value);
  }
}
