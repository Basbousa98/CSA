import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'psw': new FormControl('',[Validators.required]),
      'confirmPsw': new FormControl('',[Validators.required])
    })
  }

  login(f: FormGroup){
    let login=false;
    console.log(f.value)
    this.serviceUser.list.forEach(
      (user: User)=>{
      if(user.email===f.controls['email'].value && user.password===f.controls['password'].value){
        login = true;
      }
    })
    console.log(login)
    return login;
  }

}
