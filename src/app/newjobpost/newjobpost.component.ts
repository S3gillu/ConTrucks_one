
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-newjobpost',
  templateUrl : './newjobpost.component.html'

 
})
export class NewjobpostComponent implements OnInit {
   weights=weights;
  loads=loads;
  types=types;
  states =states;
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
       // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'title' : [null, Validators.required],
      'description': [null, Validators.required],
       'budget' : [null, Validators.required],
       'time' : [null, Validators.required],
       'load' : [null, Validators.required],
      'weight' : [null, Validators.required],
       'pick' : [null, Validators.required],
       'drop' : [null, Validators.required],
       'startdate' : [null, Validators.required],
       'enddate' : [null, Validators.required],
       'trucktype' : [null, Validators.required],
       'truckrequired' : [null, Validators.required],
      

    
    })
  }

  submitForm(value: any){
    console.log(value);
  }
}
export const loads=['Auto Parts','Plastic','Building Materials','Cement','Chemicals','Cotton Seed',
                     'Electronics Consumer Durables','Fertilizers','Fruit & Vegetables','Furniture & Wood Products',
               'House Hold Goods','Industrial Equipments','Iron Sheets or Bars','Scrap','Liquid in Drums And Containers',
                     'Liquid/Oil','Gasoline','Gas','Machinery New or Old','Medicals','Metals','Mill Jute Oil','Others',
                    'Packet Food','Plastic Pipes or Other Products','Powder Bags','Printed Books or Paper Rolls',
                   'Spices','Grains','Textiles','Tyres and Rubber Products','Vehicles or Cars','Boats',
                    'House','Snow','Accidented Vehicles','Garbage'
                    ];
  export const weights=['Upto 3 MT','Upto 5 MT','Upto 7 MT','Upto 9 MT','Upto 11 MT','Upto 15MT',
                   'Upto 20 MT','Upto 25 MT','Upto 30 MT','Upto 35 MT','Upto 40 MT ','Upto 45 MT', 'Upto 50 MT','Above 50 MT'
                      ]; 

 export const types = ['Concrete Mixer', 'Chiller Truck', 'Mobile Crane', 'Curtain Side Truck',
                        'Box Truck','Flat-bed Truck','Stock Truck','Dump Truck','Refuse Truck',
                      'Logging Truck','Snow Truck','Tankers (For Liquid Materials)','Tipper Truck & trailer',
                     'Tow Trucks','Boat Haulage','Car Transporters'];  

export const states = ['1', '2', '3', '4','5','6','7','8','9','10','11','12','13','14','15','More Than 15'];                                                                