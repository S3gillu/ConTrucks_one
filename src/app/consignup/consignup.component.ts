import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-consignup',
  templateUrl: './consignup.component.html',
  styleUrls: ['./consignup.component.css']
})
export class ConsignupComponent implements OnInit {

    rForm: FormGroup;
post: any;
password: string='';
fname: string='';
lname: string='';
userid: string='';
email: string='';
cnfpassword: string='';
age: string='';
contact: string='';

  constructor(private fb: FormBuilder) {
     this.rForm = fb.group({
      'userid' : [null,Validators.required],
      'fname' : [null,Validators.required],
      'lname' : [null,Validators.required],
      'age' : [null,Validators.compose([Validators.required, Validators.max(100),Validators.min(10)])],
      'email' : [null,Validators.required],
      'cnfpassword' : [null,Validators.required],
      'contact' : [null,Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12), ])],

      'password' : [null,Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'validate' : ''
    });
   }

  ngOnInit() {
  }

}
