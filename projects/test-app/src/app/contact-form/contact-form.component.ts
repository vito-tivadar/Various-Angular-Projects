import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMehods = [
    {id: 1, name: "E-mail"},
    {id: 2, name: "Phone"},
    {id: 3, name: "Fax"}
  ]


  log(x: any) {
    console.log(x);
  }

  submit(f: any) {
    console.log(f.value)
  }

}
