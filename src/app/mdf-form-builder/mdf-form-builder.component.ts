import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-mdf-form-builder',
  templateUrl: './mdf-form-builder.component.html',
  styleUrls: ['./mdf-form-builder.component.css']
})
export class MdfFormBuilderComponent implements OnInit {

userForm: FormGroup;
constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
        name:['Madhav', Validators.required],
        email:[],
        address: this.formBuilder.group({
            street:[],
            city:[],
            postalCode:[null,[Validators.required, Validators.minLength(4)]]
                    })
      });
  }
    
    onSubmit(){
    console.log(this.userForm.value);
}

}
