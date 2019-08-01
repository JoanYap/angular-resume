import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  // details = ["John Doe", "38 years"]
  details = {
    "Name": "Wei Wen",
    "Age": "29 years" ,
    "Location": "Penang",
    "Experience": "IT",
    "Degree": "Bachelor",
  }

  // imgUrl = null
  // placeholderUrl = "https://via.placeholder.com/150"
    constructor() { }

  ngOnInit() {
  }

}
