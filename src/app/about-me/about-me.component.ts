import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  navItemTitle = "About Me"

  //1. add a css class
  //2. add a new booelan variable
  //3. check that boolean property in html to apply css
  //4. toggle the booelean property to enable / disable the css class

  isStudent = true
  highlighted = false

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isStudent = false
  }

  toggleClick() {
    this.isStudent = !this.isStudent
    this.navItemTitle = "Something Else"
  }

  toggleHighlighted() {
    this.highlighted = !this.highlighted
  }
}
