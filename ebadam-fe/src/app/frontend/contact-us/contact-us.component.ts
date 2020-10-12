import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface ContactSubject {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  selectedValue = 'enquiry';
  contactSubject: ContactSubject[] = [
    {value: 'enquiry', viewValue: 'General Enquiry'},
    {value: 'complaint', viewValue: 'Any Complaints'},
    {value: 'feedback', viewValue: 'Your Feedback'},
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactSubs: [this.selectedValue, Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    
  }

}
