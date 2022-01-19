import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/home';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: Header;
  
  constructor() {
    this.header = {
      img: {
        src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642543171/Angular/image2_moos8w.png",
        alt: "Logo de probioticos",
      },
      name: "PROBIOTICOS",
      created: ""
    }
  }

  ngOnInit(): void {
  }

}