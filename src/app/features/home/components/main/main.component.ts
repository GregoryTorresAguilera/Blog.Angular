import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public main: Main[]
  constructor() {
    this.main = [
      {
        title: "",
        text: "",
        img: {
          src: '',
          alt: ''
        },
      },
      {
        title: "",
        text: "",
        img: {
          src: '', alt: ''
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}