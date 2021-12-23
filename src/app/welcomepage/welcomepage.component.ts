import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  startquiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);

  }

}
