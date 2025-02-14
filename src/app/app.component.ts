import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validators';
import { NoSpaceValidator } from './shared/const/noSpace';
import { panCardvalidator } from './shared/const/panCardvalidator';
import { empIdvalidator } from './shared/const/empIdvalidator';
import { aadharcardValidaor } from './shared/const/aadharcardValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  signUp!: FormGroup;

  genderArr: Array<string> = ['Female', 'Male', 'Other'];
  // constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createSingUpForm();
  }

  createSingUpForm() {
    this.signUp = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.username),
        Validators.minLength(5),
        Validators.maxLength(8),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(CustomRegex.email),
      ]),

      empId: new FormControl('', [
        Validators.required,
        NoSpaceValidator.noSpace,
        empIdvalidator.isempIdValid,
      ]),

      panNumber: new FormControl('', [
        Validators.required,
        panCardvalidator.panCard,
      ]),

      aadharNumber: new FormControl('', [
        Validators.required,
        aadharcardValidaor.aadharNumber,
      ]),

      gender: new FormControl('Female'),
    });
  }

  onSignUp() {
    console.log(this.signUp);
    if (this.signUp.valid) {
      console.log(this.signUp.value);
    }
    // this.signUp.reset();
  }

  get f() {
    return this.signUp.controls;
  }

  // get getuserName() {
  //   return this.signUp.get('userName') as FormControl;
  // }
  // to get a single control to error handling
}

// new FormControl(defaultValue,[validators sync],[validators async])
// error possible values are null || errorObj
