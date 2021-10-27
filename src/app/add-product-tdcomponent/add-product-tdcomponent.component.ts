import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-product-tdcomponent',
  templateUrl: './add-product-tdcomponent.component.html',
  styles: [
  ]
})
export class AddProductTDComponentComponent implements OnInit {
  myForm: FormGroup;
  myFormSupp: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      'id': new FormControl('', [Validators.required]),
      'code': new FormControl('',[Validators.required, Validators.pattern( "[a-zA-Z-0-9]{8}")]),
      'libelle': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'prix': new FormControl('',[Validators.required, Validators.pattern( "[1-9][0-9]*")])
    })

    this.myFormSupp= new FormGroup({
      'id': new FormControl('', [Validators.required]),
      'dateCreation': new FormControl('',[Validators.required]),
      'dateModif': new FormControl('',[Validators.required]),
      'categorie': new FormControl('',[Validators.required])
    })
  }

}
