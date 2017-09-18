import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { mobileValidator, equalValidator, mobileAsyncValidator } from '../vlidator/validators';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  formModel: FormGroup;

  // mobileValidator(control: AbstractControl): { [key: string]: any } {


  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   useranem: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordsGroup: new FormGroup({
    //     passwords: new FormControl(),
    //     pawwwords2: new FormControl(),
    //   }),
    // });
    this.formModel = fb.group({
      // useranem: [''],
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        passwords: ['', [Validators.minLength(6)]],
        pawwwords2: ['']
      }, { validator: equalValidator })
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    console.log('username的校验结果：' + this.formModel.get('username').valid);
    console.log('username的错误信息：' + JSON.stringify(this.formModel.get('username').errors));
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}