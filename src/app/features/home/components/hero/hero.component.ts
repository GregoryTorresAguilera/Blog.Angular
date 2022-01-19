import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/home';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: Hero;

  constructor() {
    this.hero = {
      img: {
        src: 'https://res.cloudinary.com/dtaz65dmf/image/upload/v1642542032/Angular/Conprobi%C3%B3ticos_tdxwmn.jpg',
        alt: 'Probioticos logo'
      },
      description: "Blog de Productos con Probioticos y Prebioticos",
    }
  }

  ngOnInit(): void {
  }

}
