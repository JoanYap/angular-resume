import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  sectionTitle = "About Me"
  details = {
    "Name": "Joan",
    "Age": "29 years",
    "Location": "Penang",
    "Experience": "4 years",
    "Degree": "Bachelor",
    "Career Level":"Senior",
    "Phone": "0143271572",
    "Fax": "046336621",
    "Email": "joan.0214@hotmail.com",
    "Website": "joan.0214@hotmail.com"
  }
  
  isHovering = false 
  constructor() { }

 
  ngOnInit() {
  }

  triggerHover() {
    this.isHovering = true
  }

  notHover() {
    this.isHovering = false
  }
  
}
