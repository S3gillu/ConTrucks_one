import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-truckersignup',
  templateUrl: './truckersignup.component.html',
  styleUrls: ['./truckersignup.component.css']
})
export class TruckersignupComponent implements OnInit {
router: any;

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
license: string='';

  constructor(private fb: FormBuilder) { 
        this.rForm = fb.group({
      'userid' : [null,Validators.required],
      'fname' : [null,Validators.required],
      'lname' : [null,Validators.required],
      'age' : [null,Validators.required],
      'email' : [null,Validators.required],
      'cnfpassword' : [null,Validators.required],
      'license' : [null,Validators.required],

      'contact' : [null,Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12), ])],

      'password' : [null,Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'validate' : ''
    });

  }

  ngOnInit() {
  }

}
