import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validators';
import { NoSpaceValidator } from './shared/const/noSpace';
import { panCardvalidator } from './shared/const/panCardvalidator';
import { empIdvalidator } from './shared/const/empIdvalidator';
import { aadharcardValidaor } from './shared/const/aadharcardValidator';
import { countryData } from './shared/const/countryData';
import { Icountry } from './shared/module/country';
import { IIndState } from './shared/module/indiastate';
import { stateIndia } from './shared/const/indiastate';

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

  countryArr: Array<Icountry> = countryData;
  indState: Array<IIndState> = stateIndia;
  ngOnInit(): void {
    this.createSingUpForm();
    this.getvaluechange();
    this.pathchvalue();
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

      currentAddress: new FormGroup({
        country: new FormControl('INDIA', Validators.required),
        state: new FormControl('Maharashtra', Validators.required),
        city: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required),
      }),
      permanentAddress: new FormGroup({
        country: new FormControl('INDIA', Validators.required),
        state: new FormControl('Maharashtra', Validators.required),
        city: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required),
      }),
      isaddsame: new FormControl({ value: null, disabled: true }),
    });
  }

  pathchvalue() {
    this.f['isaddsame'].valueChanges.subscribe((res: boolean) => {
      if (res === true) {
        let currentAddressdata = this.f['currentAddress'].value;
        this.f['permanentAddress'].patchValue(currentAddressdata);
        this.f['permanentAddress'].disable();
      } else {
        this.f['permanentAddress'].reset();
        this.f['permanentAddress'].enable();
      }
    });
  }

  getvaluechange() {
    this.f['currentAddress'].valueChanges.subscribe((res) => {
      if (this.f['currentAddress'].valid) {
        this.f['isaddsame'].enable();
      } else {
        this.f['isaddsame'].disable();
        this.f['isaddsame'].reset();
        this.f['permanentAddress'].enable();
        this.f['permanentAddress'].reset();
      }
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
