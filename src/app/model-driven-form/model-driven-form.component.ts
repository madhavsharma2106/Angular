import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

    userForm = new FormGroup({
        name : new FormControl('Madhav', Validators.required),    
        email : new FormControl(),
        address : new FormGroup({
                    street : new FormControl(),    
                    city : new FormControl(),
                    postalCode : new FormControl(null, [Validators.required, Validators.minLength(4),Validators.maxLength(6)] )
            })
    });
    
  constructor() { }

  ngOnInit() {
  }
    
onSubmit(){
    console.log(this.userForm.value);
}
}
