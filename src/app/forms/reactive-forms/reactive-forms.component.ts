import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'atb-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('Sumit', {}),
    email: new FormControl('xyz@abc.com', [Validators.email]),
    contact: new FormControl('1111111111'),
    pincode: new FormControl('444444', [
      Validators.maxLength(6),
      Validators.minLength(6),
    ]),
    addresses: new FormArray([]),
  });

  get addresses(): FormGroup[] {
    return (this.contactForm.controls.addresses as FormArray)
      .controls as FormGroup[];
  }

  get hasFormErrors(): boolean {
    return (
      !!this.contactForm.controls.email.errors ||
      !!this.contactForm.controls.pincode.errors
    );
  }

  get hasEmailError(): { error: boolean } {
    return {
      error: !!this.contactForm.controls.email.errors,
    };
  }

  constructor() {}

  ngOnInit(): void {
    // this.contactForm.addControl()
  }

  addAddress(): void {
    (this.contactForm.get('addresses') as FormArray).push(
      new FormGroup({
        streetname: new FormControl(''),
        pincode: new FormControl(''),
      })
    );
  }

  saveContactForm(): void {
    if (this.contactForm.valid) {
      console.log('Saving the data', this.contactForm.value);
      // Call your APIs
    } else {
      console.log({ emailErrors: this.contactForm.controls.email.errors });
      console.log({ pincodeErrors: this.contactForm.controls.pincode.errors });
      alert('Please correct invalid form inputs.');
    }
  }
}
